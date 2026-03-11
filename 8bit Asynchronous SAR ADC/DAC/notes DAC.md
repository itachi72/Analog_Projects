1\. Mistake made: for caps entered value as Cd\*128f F. 

then while simulation entered value of Cd again as 1**f.** This became f\*f which changed the value entirely.



2\. which TB of TGSwitch, the output rise and fall edges was not clean. I assumed it was the inverter's fault that produced clk\_bar.
But the edges were not clean even in SwitchNW\_TB. so i realised it was TG sizings issue. USed rule of thumb W/L of pmos=nmos in TG and W/L as small as possible.

