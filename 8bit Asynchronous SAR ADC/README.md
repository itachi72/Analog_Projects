# 8bit Asynchronous SAR ADC

Project-level index for SAR ADC block simulations and integration assets.

## Block Status

| Block | Folder | Notes File | Key Artifacts |
|---|---|---|---|
| BootStrappedSwitch | `BootStrappedSwitch/` | `BootStrappedSwitch.txt` | schematic, TB, waveform, parameter snapshot |
| Comparator | `Comparator/` | `notes comparator.txt` | schematic, TB, waveform, latch and logic references |
| DAC | `DAC/` | `notes DAC.md` | DAC schematic/TB/waveform, switch network artifacts |
| DAC with BootStrappedSwitch | `DAC/DAC_with_BootStrappedSwitch/` | `DAC_with_BootStrappedSwitch.txt` | integrated schematic and waveform variants |
| SAR Logic | `SAR/` | `notes SAR.txt` | SAR logic, clk/reset, comparator case waveforms |
| CMOS D FF | `SAR/CMOS D FF/` | - | schematic, TB, waveform |
| Reference | `Reference/` | - | architecture references and project PDF |
| Whole System | `WholeSystem/` | - | top-level system image |

## Suggested Next Standardization Actions

1. Convert `.txt` notes to `.md` gradually.
2. Rename high-use images first to snake_case names from `STANDARDIZATION_GUIDE.md`.
3. Add block-level `README.md` in each block folder using `TEMPLATES/Block_README_Template.md`.
