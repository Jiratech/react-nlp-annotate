// @flow

import React, { useState, useMemo, useEffect } from "react"

import type { RelationshipAnnotatorProps } from "../../types"
import Document from "../Document"
import LabelSelector from "../LabelSelector"
import stringToSequence from "../../string-to-sequence.js"
import mergeSequence from "../../merge-sequence.js"
import colors from "../../colors"
import { styled } from "@material-ui/core/styles"
import ToggleButton from "@material-ui/lab/ToggleButton"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"
import Box from "@material-ui/core/Box"
import LowPriorityIcon from "@material-ui/icons/LowPriority"
import TextFormatIcon from "@material-ui/icons/TextFormat"

const withId = entity =>
  entity.textId
    ? entity
    : {
        ...entity,
        textId: Math.random()
          .toString(36)
          .slice(-8)
      }
const LabelSelectorContainer = styled("div")({ display: "flex" })

export default function RelationshipAnnotator(
  props: RelationshipAnnotatorProps
) {
  const [highlightedItems, changeHighlightedItems] = useState([])
  const [relationships, setRelationships] = useState(
    props.initialRelationships || []
  )
  const [activePair, setActivePair] = useState(null)
  const [creatingRelationships, setCreatingRelationships] = useState(false)
  const newSequence = () => {
    const textIdsInRelationship = new Set(
      relationships.flatMap(({ to, from }) => [to, from])
    )
    return props.initialSequence
      ? props.initialSequence.flatMap(entity =>
          entity.label ||
          (entity.textId && textIdsInRelationship.has(entity.textId))
            ? [withId(entity)]
            : stringToSequence(entity.text, props.separatorRegex).map(withId)
        )
      : stringToSequence(props.document).map(withId)
  }
  const [sequence, changeSequence] = useState(newSequence);

  useEffect(() => {
    setRelationships(props.initialRelationships || []);
    changeSequence(newSequence());
  }, [props.document]);

  const labels = creatingRelationships
    ? props.relationshipLabels
    : props.entityLabels

  const colorLabelMap = useMemo(
    () =>
      (props.entityLabels || [])
        .concat(props.relationshipLabels)
        .reduce(
          (acc, l, i) => (
            (acc[l.id] = l.color || colors[i % colors.length]), acc
          ),
          {}
        ),
    [props.entityLabels, props.relationshipLabels]
  )

  return (
    <div>
      {!props.overviewMode && <LabelSelectorContainer>
        <LabelSelector
          hotkeysEnabled={props.hotkeysEnabled}
          labels={labels}
          onSelectLabel={(label: string) => {
            if (props.overviewMode) { return; }
            if (!creatingRelationships) {
              if (highlightedItems.length === 0) return;
              let buildText = ""
              let newSequence = [...sequence]
              for (let itemIndex of highlightedItems) {
                const item = sequence[itemIndex]
                buildText += item.text
                newSequence[itemIndex] = null
              }
              newSequence[highlightedItems[0]] = {
                text: buildText,
                textId: sequence[highlightedItems[0]].textId,
                color: colorLabelMap[label],
                label
              }
              newSequence = newSequence.filter(Boolean)

              changeSequence(newSequence)
              props.onChange({
                sequence: newSequence,
                relationships
              })
              changeHighlightedItems([])
            } else {
              if (!activePair) return;
              setActivePair(null)
              const newRelationships = relationships.concat([
                { ...activePair, label: label, color: colorLabelMap[label], temp: false }
              ])
              setRelationships(newRelationships)
              props.onChange({
                sequence,
                relationships: newRelationships
              })
            }
          }}
        />
        <Box flexGrow={1} />
        <ToggleButtonGroup
          value={creatingRelationships ? "relationships" : "entities"}
          exclusive
          onChange={(e, newAlignment) => {
            if (newAlignment === "relationships") {
              setCreatingRelationships(true)
            } else {
              setCreatingRelationships(false)
            }
          }}
        >
          {props.entityLabels && (
            <ToggleButton value="entities">
              <TextFormatIcon />
            </ToggleButton>
          )}
          <ToggleButton value="relationships">
            <LowPriorityIcon style={{ transform: "rotate(90deg)" }} />
          </ToggleButton>
        </ToggleButtonGroup>
      </LabelSelectorContainer>}
      <div style={{ borderTop: "1px solid #ccc", marginTop: 8, paddingTop: 5 }}>
        <Document
          constraintRelationships={props.constraintRelationships}
          overviewMode={props.overviewMode}
          separatorRegex={props.separatorRegex}
          colorLabelMap={colorLabelMap}
          nothingHighlighted={highlightedItems.length === 0}
          onCreateEmptyRelationship={([first, second]) => {
            if (props.overviewMode) { return; }
            setActivePair({
              from: first,
              to: second,
              label: "???",
              color: "#f00",
              temp: true,
            })
          }}
          onClick={props.onClick}
          onRelationshipsChange={rel => {
            if (props.overviewMode) { return; }
            setRelationships(rel);
            const allTextIds = new Set(sequence.map(item => item.textId))
            props.onChange({
              sequence: sequence,
              relationships: rel.filter(
                r => allTextIds.has(r.from) && allTextIds.has(r.to)
              )
            })
          }}
          onHighlightedChanged={highlightedItems => {
            if (props.overviewMode) { return; }
            changeHighlightedItems(highlightedItems)
          }}
          onSequenceChange={seq => {
            if (props.overviewMode) { return; }
            changeSequence(seq)
            const allTextIds = new Set(seq.map(item => item.textId))
            props.onChange({
              sequence: seq,
              relationships: relationships.filter(
                r => allTextIds.has(r.from) && allTextIds.has(r.to)
              )
            })
          }}
          sequence={sequence}
          relationships={relationships.concat(
            activePair !== null && creatingRelationships ? [activePair] : []
          )}
          createRelationshipsMode={creatingRelationships}
        />
      </div>
    </div>
  )
}
