# Chat Application BackStory

---

So, I've been building frontend projects for a while, but none of them felt like they were it. Then, I decided to make a chat application (CAUSE WHY NOT!!!).

Little did I know that this decision would make me suffer so much.

For the past two days, I've been trying to host the server on a virtual VM provided by Oracle Cloud. I was initially using it to play Minecraft (because free servers are trash). After 3-4 hours of searching for how servers are hosted, I uploaded the files to the VM using FileZilla and tried running it after installing all the dependencies. But there was an issue with the Node version, so I had to upgrade it using fnm. Finally, the server started working!

I then went on to implement the UI of the web app using React and tried making it more secure because, honestly, losing the socket connection on each refresh is just too annoying.

The UI was easy enough (CAUSE FRONTEND IS FUCKING EASY), but hosting the entire website on the VM? That's where the struggle began.

I tried hosting the website with Apache, but it wasn’t working. So I thought Nginx would be easier. I installed Nginx, but it couldn’t access the build file in the `dist/` directory. In an attempt to fix that, I gave read and write permissions to the entire home directory and the user inside it.

Turns out, that was a huge mistake. I couldn't access the VM instance anymore. I first noticed this when I couldn’t upload files via FileZilla. Then, I closed the PuTTY connection, and BOOM — I was locked out. When I tried reconnecting, the server rejected my private key (heartbroken 😭). I had just lost access to my old Minecraft server. But honestly, at this point, I couldn’t care less about the webserver or chat app.

I created a new instance and tried to attach the boot volume of the old instance to recover some data, but surprise, surprise, the boot volume was corrupted (I wonder why...).

Anyway, I installed Nginx with a YouTube tutorial and some common sense, replacing the `index.html` in `/usr/share/nginx/html` with the built `index.html`. The build file was simplified by npm to just 3 files: the JS, CSS, and HTML files. Amazing! Now I just had to run the IP of the VM, and voilà, it should work.

But, of course, I forgot to configure the firewall to allow traffic from port 9000.

At long last, the web app and server were up and running. I was finally relieved that this "useless" thing works now.

---

## How to Run the Chat Application

1. Ensure that your current working directory (`pwd`) ends with `/ChatApplication/`.
2. Run the following command in the console to start the app:

   ```bash
   npm run dev

   ```

3. Note: This will run the webapp locally and you wont be able to communicate with other people. To enable communication with other people, you'll have to host the server using a cloud service provider or a web hosting service.
