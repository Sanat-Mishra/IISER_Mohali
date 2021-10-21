# OSCCit-Assistant

Oral squamous cell carcinoma (OSCC) is the most prevalent form of oral cancer. Since medical infrastructure is unaffordable to most of our society, an urgent and effective diagnostic tool is needed at present. Our kit, OSCCit aims at detecting the levels of salivary protease biomarkers that are elevated among OSCC patients. It then assesses the risk one has of developing OSCC and might suggest the user to visit a doctor. OSCCit contains an engineered bacterial cage protein - Encapsulin that has fluorophores internally and a substrate sequence externally. When protease biomarkers cleave the latter, fluorescence occurs. This characteristic emission frequency allows us to verify the presence of the protease and estimate its concentration through the emission intensity. Protease biomarkers maintain their activity, giving us the advantage of working directly with a patient’s saliva without any processing. Additionally, 3D printed hardware parts ensure the kit can be used with a smartphone. 

OSCCit assistant is an android app used for analyzing spectra obtained from the 'OSCCit spectrometer' to detect the presence of OSCC. We plan to use this as a cost-effective way of detecting OSCC at an early stage. 

Follow [this](2021.igem.org/team:iiser_mohali) link to know more about this work and the people behind it.

## Installation Instructions

1. Go to the ```apk``` folder in the repository and transfer the file ```OSCCit Assistant.apk``` to your android device.
2. Open the file in your android device and install. You may have to grant permission for installing apps from unknown sources for the app to install. In case your phone doesn't allow app installation due its own security settings, you need to follow the steps in [Development and Build Instructions](#download-and-build-instructionsfor-development-purposes).

## Using the Sample Data

Transfer the files inside the folder ```Sample Data``` to your android device. Then follow the instructions corresponding to the mode of operation.

#### Spectrum Intensity Analyzer

1. Open the app and select ```Spectrum Intensity Analyzer```.
2. Press ```Open Gallery``` and select ```Sample.jpg``` from the location you stored the sample data into.
3. Click on ```Choose Calibration Parameter``` button and click the ```Create New`` button.
4. Click on the button at the bottom right corner of the new screen that appears.
5. Select ```calib.jpg``` from ```Spectrum Intensity Analyzer Mode``` folder.
6. Select the relevant cropping area(the area containing the spectrum) in the image that appears on the screen.
7. Press ```Save```.
8. Give a name to the calibration parameter you just created and click on ```Save```. You will be returned to the previous screen.
9. Click on ```Choose Calibration Parameter``` and select the calibration parameter you just created from the dropdown.
10. Click on ```Analyse```. The Intensity-Wavelength spectra would appear on the screen.

#### Sample Concentration Analyzer

1. Open the app and select ```Sample Concentration Analyzer```.
2. Click on ```Choose Calibration Parameter``` and click the ```Create New``` Button. 
3. Tap on the button at the bottom right corner of the new screen that appears.
4. Select ```10.5.jpg``` from ```Sample Concentration Analyzer Mode``` folder. You can choose any image whose sample concentration is known.
5. Select the relevant cropping area(the red part of the spectrum) in the image that appears on the screen.
6. Press ```Save```.
7. Give a name to the calibration parameter you just created and click on ```Save```. You will be returned to the previous screen.
8. Click on ```Add Images of Known Sample Concentration``` button. Select the file ```10.5.jpg```. 
9. Enter the concentration of the sample(10.5 in this case, same as the file name) in the dialog box that appears and press ```Continue```.
10. The entry will be added and it will appear on the screen. Repeat the same procedure for all other sample images whose concentration is known(10.5, 14.0, 21.0, 42.0 in this case).
11. Click on the ```Add Image of Unknown Sample Concentration``` button. Select the file ```28.jpg```.
12. Press ```Get Unknown Concentration``` button. You will see a plot showing the Intensity-Concentration best fit and the concentration of the sample will appear below the screen.

## Download and Build Instructions(For development purposes)

1. Download and install [Android Studio](https://developer.android.com/studio).
2. Clone this repository locally.
3. Open android studio, then open the ```OSCCit Assistant``` folder of repository from your local storage. Android Studio will download the required gradle version and other dependencies. This could take upto 30 minutes.
4. Connect your android device to your PC and enable USB debugging in your phone's settings.
5. The name of your android device will appear in a dropdown at the top of the Android Studio window. Press the 'Run app' button next to it. This will install the app on your android device.

