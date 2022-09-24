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

https://user-images.githubusercontent.com/33321420/192088364-01f76e24-c025-4139-b816-42e7d608873e.mp4


# Contributors
Designed and Developed By : Prema.Namasivayam@VERIFONE.com, Satyajit.Sial@VERIFONE.com <br>
Guided By : Vineet.Dutt@VERIFONE.com , krishna_p2@VERIFONE.com
