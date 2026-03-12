# Analog/Mixed-Signal Simulation Workspace

This workspace contains block-level and system-level simulation artifacts for:

- 8-bit Asynchronous SAR ADC
- LDO
- PLL

Use this file as the top-level navigation index.

## Project Index

### 1) 8bit Asynchronous SAR ADC
Path: `8bit Asynchronous SAR ADC/`

Blocks:
- `BootStrappedSwitch/`
- `Comparator/`
- `DAC/`
- `Reference/`
- `SAR/`
- `WholeSystem/`

Project details: `8bit Asynchronous SAR ADC/README.md`

### 2) LDO
Path: `LDO/`

Blocks:
- `Error Amplifier/`
- `LDO_Error_Amplifier/`
- `New_7_Transistor/`

Project details: `LDO/README.md`

### 3) PLL
Path: `PLL/`

Blocks:
- `Charge Pump/`
- `Divider/`
- `Gates/`
- `PFD/`
- `Reference/`
- `VCO_ring/`
- `Whole System/`

Project details: `PLL/README.md`

## Standardization

Naming and organization rules:
- `STANDARDIZATION_GUIDE.md`

Template for new block documentation:
- `TEMPLATES/Block_README_Template.md`

## Quick Start For New Work

1. Create or use an existing block folder under the target project.
2. Add/update `BlockName/README.md` using the template.
3. Save artifacts using the naming rules in `STANDARDIZATION_GUIDE.md`.
4. Update the project `README.md` block status table.
