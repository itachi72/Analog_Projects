# PLL

Project-level index for PLL block simulations and system integration artifacts.

## Block Status

| Block | Folder | Notes File | Key Artifacts |
|---|---|---|---|
| Charge Pump | `Charge Pump/` | `note charge pump.txt` | opamp/schematic zooms, TB schematic, waveform, params |
| Divider | `Divider/` | - | DFF/TSPC schematics, TB setups, waveforms |
| Gates | `Gates/` | - | INV/NAND/NOR schematics |
| PFD | `PFD/` | `PFD.txt` | PFD schematic, TB, waveform, TB params |
| Reference | `Reference/` | - | supporting design references |
| VCO Ring | `VCO_ring/` | `note VCO ring.txt` | iteration schematics and waveforms |
| Whole System | `Whole System/` | `note whole system.txt` | full schematic, params, final matched outputs |

## Suggested Next Standardization Actions

1. Rename `Whole System` and `Charge Pump` folders when ready (for example `WholeSystem`, `ChargePump`).
2. Convert note `.txt` files to `.md`.
3. Add block-level `README.md` files and artifact tables per block.
