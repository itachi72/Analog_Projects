# Standardization Guide

This guide defines a consistent structure and naming convention for all simulation assets.

## 1) Folder Structure

Recommended project structure:

- `ProjectName/`
- `ProjectName/BlockName/`
- `ProjectName/BlockName/docs/` (optional)
- `ProjectName/BlockName/schematics/` (optional)
- `ProjectName/BlockName/testbenches/` (optional)
- `ProjectName/BlockName/waveforms/` (optional)
- `ProjectName/BlockName/params/` (optional)
- `ProjectName/BlockName/README.md`

For existing folders, you can keep current placement and gradually migrate.

## 2) File Naming Convention

Use lowercase snake_case and this pattern:

`block_function_artifact[_condition][_vNN].ext`

Examples:
- `comparator_schematic_v01.png`
- `comparator_tb_v02.png`
- `comparator_waveform_v02.png`
- `ldo_dc_analysis_vp_eq_vn_v01.png`
- `vco_ring_iter05_waveform_v01.png`
- `pfd_notes.md`

Rules:
- Avoid spaces in file names.
- Use `_tb` for testbench, `_waveform` for results, `_param` for parameter snapshots.
- Use `_iterNN` for design iteration snapshots.
- Use `_vNN` only for revisions of the same artifact.

## 3) Folder Naming Convention

Use `TitleCase` or `snake_case`, but keep one style across a project.

Recommended style for this workspace moving forward:
- Folder names: `TitleCase` without spaces where practical.
- Examples: `ChargePump`, `WholeSystem`, `ErrorAmplifier`, `VcoRing`.

If changing folder names, do it with a mapping table and one project at a time.

## 4) Documentation Standard

Each block should include `README.md` with:
- Objective
- Design summary
- Testbench setup
- Results summary
- Open issues / next steps
- Artifact index

## 5) Migration Plan For Existing Files

1. Do not rename everything at once.
2. Start with one project (for example `PLL`).
3. Create a rename mapping table: `old_name -> new_name`.
4. Rename files first, then folders.
5. Update block `README.md` artifact indexes.
6. Run a quick sanity check by opening key artifacts.

## 6) Minimum Required Artifacts Per Block

- `README.md`
- At least one schematic image
- At least one testbench artifact (if applicable)
- At least one waveform or result capture
- Notes file (`.md` preferred)

## 7) Recommended Extensions

- Prefer `.md` over `.txt` for notes.
- Keep images as `.png` unless there is a reason to use another format.
- Keep reference documents under a `Reference/` folder.
