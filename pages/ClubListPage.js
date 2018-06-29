import React, { Component } from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import GridView from 'react-native-super-grid';

import GridViewItemWithImage from '../components/GridViewItemWithImage'
import NavigationService from '../services/NavigationService'

const ExampleData = [
    {
        id: 1, 
        title: 'Computer Science Society', 
        imageSource: 'http://sanottingham.org//wp-content/uploads/Computer-science-society-logo.png',
        description: 'The CSS motto, “Equip, Empower, Enrich” serves as a guideline for students to explore new ideas and also to build collective knowledge by exposing students to cutting-edge technologies and industry professionals to share resources and address the challenges in this field. Students are given the opportunity to be forward-thinking and develop/refine necessary skills to strive in their field. We aim to advance in theory, practice, and application of computer science and maintain close relationship among members. CSS not only welcomes students from School of Computer Science but also individuals who are passionate about the dynamic world of technology and computing.'
    },
    {
        id: 2, 
        title: `Nott's Makers`, 
        imageSource: 'http://sanottingham.org//wp-content/uploads/2015/07/13925537_1111562382270994_8102554198483220907_o.jpg',
        description: `Do you simply love making things, be it arts & crafts, simple technology, unmanned drones? Well, you’re at the RIGHT place towards the realization of that dream! We as makers are highly encouraged to adapt the D-I-Y culture by having hands-on experience in everything and anything we do, not to mention, with PASSION! Nott’s Makers Club (NMC) was founded with a vision of cultivating a makers community that turns ideas into reality through learning, building and sharing. It provides a platform for students from various backgrounds to connect together in creation of any projects that may bring changes and enhancement to the world and community. Typical interests to be nurtured through NMC are mainly focused on Arts & Crafts (felt craft, terrarium and woodworking) as well as Technology based (3D printing, drone development, software development, Arduino projects and Internet of Things). Do you want to Make A Difference? It all begins with Nott’s Makers! “All BIG things start from SMALL”`,
    },
    {
        id: 3, 
        title: 'Accounting and Finance Society UNMC', 
        imageSource: 'http://sanottingham.org//wp-content/uploads/accounting-finance-society-logo-2-unmc.jpg',
        description: `Accounting and Finance Society (AFS) UNMC is a student-led society which caters students’ burning desires and interests in the accounting and finance profession. AFS aims to provide a platform for members to supplement their degree education by acquiring the latest and updated information in accountancy and finance. Besides, we also aim to seek careers insights and exposure to the professionalism and ethnics in the related field through industrial visits and speeches by leading experts. AFS strives to acquire useful and advantageous opportunities for undergraduates in learning the industries’ occupation and information which are useful for potential future careers Please visit our booth at the Clubs and Societies Fair for more details and join us! Like Facebook page for more updates at http://www.facebook.com/afsunmc`,
    },
    {
        id: 4, 
        title: 'Robotics Society', 
        imageSource: 'http://sanottingham.org//wp-content/uploads/UNMC-CRS.png',
        description: `“For the Passionate, intuitive, innovative and inventive robotics enthusiasts” UNMC Robotics Society is a platform to educate and to expose our members including the student community on the importance and the impact of robotics in our daily lives. From there, we wish to equip people with skills related to robot building to push, test and unearth their engineering abilities and talents. Consequently, we would like to kick-start potential members to participate in robot building competitions either in national or international level. All robotics enthusiasts at any level, be it beginners, intermediates or experts, are warmly welcomed!`,
    },
    {
        id: 5, 
        title: 'Digital Arts Guild', 
        imageSource: 'http://sanottingham.org//wp-content/uploads/DAG-Logo1.png',
        description: `DAG is the umbrella that exists for the sole purpose of giving students their creative voices and preserving them.

        The Digital Arts Guild (DAG) is a media group dedicated to nurturing and creating artists and creative minds that are interested in trying out and/or already involved in art, photography, videography, graphics design, web designed and any other creative art form that you might be interested in. One of our main aims is to give students their creative voices and preserve them.
        
        Under our umbrella we also have NottinghamTV which is the student media group dedicated to creating video content.
        If you are interested in joining us to learn and develop yourselves check out our work on our social media’s and sign up with us!`
    },
    {
        id: 6, 
        title: 'Gaming Society', 
        imageSource: 'http://sanottingham.org//wp-content/uploads/Gaming-Society-Logo.png',
        description: `  Fancy a session of gaming? Or do you just want to meet others who share your passion in games? Join the Gaming Society! As one of the most active societies on campus, we are dedicated to bringing students together through hours of fun. Come enjoy all sorts of games, from PC games to console games to board games to role playing games! We are also proud to present our new private 5mbps internet that allows access any gaming platform! Challenge your friends, challenge your mind, go on adventures, take a break and relax. You can do it all! So come visit us in the gaming room, located at the first floor hallway of H block (The SA building)!`,
    },
    {
        id: 7, 
        title: 'NDC', 
        imageSource: 'http://sanottingham.org//wp-content/uploads/NDC-NEW-LOGO.png',
        description: `  As one of the leading performing arts club the Nottingham Dance Club, NDC, will look forward to bringing more of the dance culture in the Malaysia campus. We provide the beautiful contemporary dance and street dance genres that covers Hip Hop, Girl Style, K-Pop, Break Dance, Shuffle and many more. It does not matter if you are a beginner and have not make a single dance move before or professionals that had already performed countless times on stage, we will welcome all of you with open hands as we will continue to grow together and improve oneself in NDC. We do look forward to expand the dance culture on campus and we will be looking forward for collaborations with other clubs and societies as well. There will be a lot of activities provided for members to enjoy, for example weekly dance classes, flash mobs, annual dance production and more.`,
    },
    {
        id: 8, 
        title: 'Instiution of Engineers Malaysia', 
        imageSource: 'http://sanottingham.org//wp-content/uploads/2015/07/IEM-UNMC-Student-Section.png',
        description: `The Institution of Engineers, Malaysia (IEM) was established in 1959 and its primary function is to promote and advance the science and profession of engineering in any or all of its disciplines and to facilitate the exchange of information and ideas related to engineering. The IEM UNMC Student Section provides exposure to students to the working world through talks and industrial visits. We aim to be the most active engineering society in UNMC and to have the full participation of students. Our objective is to be a platform of collaboration with other student chapters to improve the student experience in and out of UNMC.`,
    },
    {
        id: 9, 
        title: 'Enactus UNMC', 
        imageSource: 'http://sanottingham.org//wp-content/uploads/Enactus-Logo.png',
        description: `  Enactus is an international nonprofit organization dedicated to inspiring students to improve the world through entrepreneurial action. We provide a platform for teams of outstanding university students to create community development projects that put people’s own ingenuity and talents at the center of improving their livelihoods. Guided by educators and supported by business leaders, our students take the kind of entrepreneurial approach that empowers people to be a part of their own success. Our work transforms both the lives of the people we serve, and in turn, the lives of our students as they develop into more effective, values-driven leaders. An annual series of regional and national competitions provides a forum for teams to showcase the impact of their outreach efforts and to be evaluated by executives serving as judges. National champion teams advance to the prestigious Enactus World Cup to experience excellence in competition, collaboration and celebration.`,
    },
    {
        id: 10, 
        title: 'Japanese Cultural Society', 
        imageSource: 'http://sanottingham.org//wp-content/uploads/Japanese-Cultural-Society-Logo.png',
        description: `  Japan, an island country known by the name ‘Land of the Rising Sun’, is a cultural melting pot with a taste of Asia, Europe, and North America in the blend. As the name suggests, the Japanese Cultural Society (JSOC), aims to provide chances for Students in UNMC to gain insights into the interesting cultures stemming from the long history of traditions which underpins the establishment of the culturally sophisticated land that has since set the heart-bound destination of travelers from all over the world. Instead of lecturing the members of the Society with Japan’s meandering history which hardly interest the majority of them (yes, we are aware of that), the JSOC tries to connect its members with Japan’s rich cultures in the most fun-filled and knowledge-packed way imaginable, that is to take the cultures into their own hands, literally!`,
    },
    {
        id: 11, 
        title: 'Chinese Cultural Society', 
        imageSource: 'http://sanottingham.org//wp-content/uploads/Chinese-Cultural-Society-Logo.png',
        description: `Chinese Cultural Society aims to enhance the influence of Chinese culture in UNMC. We regularly organise many fun-filled and interesting events and weekly activities throughout the year to enrich our members’ university life as well as strengthen the bonds between us. Some of the highlighted events in this year are Chinese Orchestra Night, Mahjong competition, Chinese cultural night. Currently, there are five divisions conducting their regular activities every week. They are Chinese Orchestra, Chinese Debate division, Chinese Board Games division, Diabolo (Chinese Yo-yo) division and 24 Seasons Drum. Do come and join us if interested.`,
    },
    {
        id: 12, 
        title: 'ACE Society', 
        imageSource: 'http://sanottingham.org//wp-content/uploads/ACE-Logo.png',
        description: `  ACE Society, short for Action with Compassion and Empathy, is a society that focuses mainly on charity. We aim to encourage students to contribute to the society through the act of giving and volunteering and to further develop and instill feelings of compassion and empathy. Each year ACE organizes events, such as ACEMas and Nottingham Charity Run to allow students to participate and volunteer their time for a good cause. ACE Society also provides platform for students to render help to the less fortunate children and we work closely with underprivileged children and orphanages. ACE Society conducts an annual teaching program to reduce the education sparsity where we send a group of students to teach in local primary schools. Hence through volunteering with ACE, we hope for each individual to grow and benefit through acts of compassion and empathy.`,
    },
    {
        id: 13, 
        title: 'Music Society', 
        imageSource: 'http://sanottingham.org//wp-content/uploads/Mussoc.png',
        description: `Music Society consists of five departments – Choir, Orchestra, Ambassadors, Production, and Events – all of which provides YOU with a unique experience, may it be in the art of performing, planning and organizing, or gaining practical technical skills. Come and join us as we take you on a journey filled with fun and enjoyment, while learning applicable, transferable skills in your future career! Find out more about us at mussoc.sanottingham.org or drop us a message on our Facebook page.`
    },
]

class ClubListPage extends Component {

    state = {
        clubList: [],
    }

    componentDidMount() {
        let newState = Object.assign({}, this.state, {
            clubList: ExampleData
        });

        this.setState(newState);
    }

    render() {
        return (
            <View style={ClubListPageStyle.container}>
                <GridView itemDimension={120}
                    items={this.state.clubList}
                    renderItem={item => 
                        <TouchableNativeFeedback onPress={() => NavigationService.navigate('club', {club: item})}>
                            <View style={ClubListPageStyle.container}>
                                <GridViewItemWithImage imageSource={item.imageSource} title={item.title}/>
                            </View>
                        </TouchableNativeFeedback>
                    }/>
            </View>
        );
    }
}

const ClubListPageStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default ClubListPage;