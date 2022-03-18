#### Project Name : **Sparkstream**
Team Details : 

- **Pratyay Banerjee** [https://neilblaze.live ; https://github.com/Neilblaze ; putubanerjee23@gmail.com] 
- **Aziz Abdullaev** [https://azizabdullaev.site ; https://github.com/azyzz228 ; aziz05072000@outlook.com]
- **Kai You** [https://www.kai-you-portfolio.com ; https://github.com/hardco2020 ; school021195@gmail.com]



#### Instructions to Run :-

Go to the root directory of the project and run the following command :-

```
npm i
npm start
```
> You can use Google / Discord / Metamask for Web3Authentication.

> Later in the main dashboard, share the Unique CODE with the user whom you want to collaborate.

**Note ⚠️ — API credentials have been revoked. If you want to run the same on your local, use your own credentials.**


---

## Inspiration 💡
**Virtual interaction has become the new normal in this Pandemic era** & *Online Classes*, *1:1 interviews* & mainly **Hackathons** are not any exception. In Virtual Hackathons, you can reach everyone in the world, but keeping a limelight on the same fact, it's also quite evident that participants have their own connectivity constraints which eventually degrades the overall experience.

![discordshit.png](https://i.postimg.cc/MG3B4CSY/discordshit.png)

 All this after investing millions of dollars into servers running on Web2, & still we use this because WE DON'T HAVE much other options :(
 
 We believe with creative thinking and a proper approach we can innovate novel methods that’ll help us tackle the same in an intuitive manner. Thus, we built **Sparkstream** ✨

![main-logo](https://i.postimg.cc/26XyGj2m/toplogo-devpost.png)

## What it does 🤔

The primary goal of **Sparkstream** is to *uplift the overall hackathon user engagement* by enabling **ultra low-bandwidth code collaboration** and **conferencing abilities** built for the better!

The name actually originated from the *'Spark of the Zeus'* that has been generated from the thunder that represents blazing Fast-Speed & 'Stream' indicates the uninterrupted flow of the same. Leveraging *web3* tech stacks and with the power of IPFS, Sparkstream is built to help people joining from across the globe to get a better hold of different meetings, conferences, 1:1 interview sessions, and as priorly mentioned, Hackathons! The use cases are numerous as of now, but for this hackathon, we carried out extensive surveys on different discord servers that actually states that people actually face a lot of problem on these sort of Web2 platforms where they often face critical lags, disconnectivity providing the fact, most of them has a single point of failure, which we are actually targeting.

![screenshot-1stpart.png](https://i.postimg.cc/m27MLMmH/mainprovider-devpost.png)

 *Design might vary in comparison to the actual product* *

Moreover, with our **code-collaborator** embedded inside Sparkstream, it becomes much easier for newcomers to interact with mentors as well as their friends in this sort of situation since most of them don’t usually know how to code collaboratively, and GitHub seems quite async to them. In a nutshell, we aim to improve this more by developing this further and finally launching this as a product!

![benifits.png](https://i.postimg.cc/4x0jxMf8/benifits-devpost.png)

### But why IPFS?
> IFPS is the face of Secure & Better Decentralized Web.

- Technically, **IPFS** is a peer-to-peer (**p2p**) *distributed system* for storing and accessing files, websites, applications, and data. Mostly people leverage IPFS to store NFT's , Assets, Medias in a decentralized space, but in actual, *it's MUCH MORE!* 

 ![ipfs-inter-planetary-file-system.gif](https://i.postimg.cc/HskypvP8/Group-79.gif)

- **The most important feature that we leverage in Sparkstream, is it's power to speed up the web when you're far away or disconnected.** We are hosting the entire app on IPFS for the same reason. It was very tricky while deploying since we had to move forward with serverless architectures.  If you can retrieve a file from someone nearby instead of hundreds or thousands of miles away, you can often get it faster. This is especially valuable if your community is networked locally but doesn't have a good connection to the wider internet & that's also why it's got it's beautiful name — InterPlanetary File System. Since, it's decentralized, so **there's no fear of Single Point of Failures** aka SPoF's, hence, your data is secure, safe & has 100% uptime forever!

- And last but not the least, **libp2p** is especially used for it's peer-to-peer connections is connection multiplexing, that help us do the crazy stuff over IPFS!

## How we built it ⚙️

First and foremost, it is Crafted with 💙. The whole process can be broken into the following points :-

- *ReactJs* as the front-end framework and *Chakra-UI* as the CSS bootstrap framework.
- Since the features were developed in segregated modules, we also used *Tailwind* as the secondary CSS framework in some of the embeddings.
- Added with the above, there also some 3rd party plugins for example *Framer Motion*, *Web3UIKit*, *Ant Design* etc.

 ![Tech-Stack.png](https://i.postimg.cc/K8KND4fc/Tech-Stack-Devpost.png)

- *Tensorflow* Colabs were run to train the image compression model, which was initially written in *Python* language.
- We are using *Axios* to log the internet speed in this project.
- *BitTorrent* was used as our default WebTorrent tracker for the *Decentralized P2P collaborative Editor*. It supports concurrent user upto 200 in a single session!
- *Postman* was used to test the custom created peerJS server api's. Later on we moved on to the default integration methods.
- *Moralis*'s web3Auth for seamless Authentication.
- *IPFS* as a storage for deploying the site on Fleek to make it fully decentralized, which actually increased speed upto X0.2 times than normal web2 methods. We also use IPFS for Pub-Sub message sharing in our chat component. Later, we intended to add the recording of the session to IPFS to keep a track of the data & to maintain transparency. 

![IPFS](https://i.postimg.cc/sgmnY5GL/IPFS-Function.png)

- Files are fetched & displayed using official *IPFS* Gateway.
- Fleek for Deployment

 ![Architecture.png](https://i.postimg.cc/nL4q3mDx/System-Arch-Devpost.png)

---

## Design 🎨

We were heavily inspired by the revised version of **Double Diamond** design process, which not only includes visual design, but a full-fledged research cycle in which you must discover and define your problem before tackling your solution & then finally deploy it.

![Double-Diamond](https://i.postimg.cc/bvQV3jHt/doublediamonddesignprocess.png)

> 1. **Discover**: a deep dive into the problem we are trying to solve.
> 2. **Define**: synthesizing the information from the discovery phase into a problem definition.
> 3. **Develop**: think up solutions to the problem.
> 4. **Deliver**: pick the best solution and build that.

Moreover, we utilized design tools like Figma,  Photoshop & Illustrator to prototype our designs before doing any coding. Through this, we are able to get iterative feedback so that we spend less time re-writing code.

![Figma](https://i.postimg.cc/QNH2R1pg/figma-devpost.png)

---

# Research 📚
Research is the key to empathizing with users: we found our specific user group early and that paves the way for our whole project. Here are a few of the resources that were helpful to us —

- *BlockIPFS* - *Blockchain-Enabled IFS for Forensic and Trusted Data Traceability* : https://bit.ly/3CgyjL2
- *IPFS docs* : https://docs.ipfs.io
- *DareNFT [info]* : https://darenft.com/darework
- *Blockchain x IPFS* : https://bit.ly/35BJMZH
- *Settlemint Docs* : https://bit.ly/3ifeJG3
- *Applications* : https://eudl.eu/pdf/10.4108/eai.6-11-2018.2279695
- *Deploying on Fleek* : https://www.youtube.com/watch?v=mCvYpl6wqB0
- *Hackathon Challenges* : https://bit.ly/3IjtTnZ
- *Online Meeting Issues* : https://bit.ly/3inTjWZ
- *Internet connection drop survey* : https://bit.ly/3ijUW8q
- *Cost of Mobile Internet Around The World* : https://bit.ly/36qa0ys
- *Internet Statistics 2022* : https://bit.ly/3whGZju


**CREDITS**
- **Design Resources** : Freepik
- **Icons** : Icons8, fontawesome
- **Font** : Righteous / Roboto / Plus Jakarta Display Sans 

---

## Challenges we ran into 😤
We faced some challenges during the hackathon, many of which ironically related to working remotely. One of the major challenges was the time difference. All of us participated from different time zones, which created communication challenges. **We started pretty late, probably on 12th March, 2022**, which actually brought some serious brainstorming and then executing thoughts into action! 


- **React components**: Transforming highly dynamic ideas created in Figma into React Components and Layouts.
- **Integration of Modules** - Connecting the Various APIs, SDK’s and JSON data with front-end UI Components was challenging!
- **IPFS integration**: Pratyay had some experience with Web3 technologies, but the rest of us didn't, so we spent time going through resources and docs to determine the exact use-cases and the integration process.
- **Working with PeerJS & LibP2P**: Took some time going through documentation and papers, but later on figured out an easy, effective and fast solution, for free, no less! 
- **Security Concerns**: We built our app under the "Privacy by Design" philosophy, which emphasizes user privacy and security. We wanted to make sure that this application is safe from external attacks and manual exploitations. Hence we don't store any data neither send it to somewhere, the stream of images are immediately deleted after obtaining the inference.

Special thanks to — [Discordian](https://twitter.com/trdiscordian) & [Tippi Fifestarr](https://github.com/tippi-fifestarr) 🤗


## Accomplishments that we're proud of ✨
We are proud of finishing the project on time which seemed like a tough task as we started working on it quite late due to other commitments. We were also able to add most of the features that we envisioned for the app during ideation. Moreover, we learned a lot about Web3 stuff, Web technologies and libraries that we could incorporate into our project to meet our unique needs. And as always, working overnight was pretty fun! :)

This project was especially an achievement for us because the experience was very different than in-person hackathons. We found that some parts were the same though - we went through heavy brainstorming and extensive research all to feel the sweet, sweet success of hitting the final pin on the board.

## What we learned 🙌
**Proper sleep is very important! :p** Well, a lot of things, both summed up in technical & non-technical sides. Also not to mention, we enhanced our googling and Stackoverflow searching skills during the hackathon :)

![team](https://i.postimg.cc/FsVNpsPS/team-devpost.png)

## What's next for Sparkstream 🚀
*We believe that our Project has great potential*. First, we plan to expand its capabilities by *incorporating other languages* in addition to English. Then the next step is to expand the number of people joining in a single session by incorporating load-balancers, since, currently it only works in 1:1 sessions. Additionally, we intend to continue improving the image compression algorithms and adding support to *native Transcriptions* to track the meeting info later.
 


![footer](https://i.postimg.cc/wjFxqTLz/footer-devpost.png)