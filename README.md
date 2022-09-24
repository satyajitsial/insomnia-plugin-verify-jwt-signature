# Verify JWT Signature (Insomnia Plugin)

This is a plugin for [Insomnia](https://insomnia.rest) to verify the JWT signature using public key to ease the testing for users.

# Plugin Installation
-  Navigate to ~/AppData/Roaming/Insomnia/plugins folder in windows
- Clone the github project
    ```sh
    git clone https://github.com/satyajitsial/insomnia-plugin-verify-jwt-signature.git
- Install the insomnia plugin with following command
    ```sh
    npm install

# How it works
- Create new HTTP Request inside Collection.
- Right click on the Request and click on "Verify JWT Signature".
- Add the Token Key of the microservice Response in the prompt box.
- Fill the Absolute File Path of the Public Key in the prompt box.

The Plugin will alert success message along with Token Payload.
In case of Failure it will alert with message "JWT Signature verification Failed using Configured Public Key"

# Demo Video

https://user-images.githubusercontent.com/6916649/191023124-262685fe-b502-4884-84f6-7c2629ea6d37.mp4

# Contributors
Designed and Developed By : Prema.Namasivayam@VERIFONE.com, Satyajit.Sial@VERIFONE.com <br>
Guided By : Vineet.Dutt@VERIFONE.com , krishna_p2@VERIFONE.com
