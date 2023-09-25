import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  eventId: number = 0;

  eventLogo: string = '';
  eventBackImg: string = '';
  eventDescription: any;
  eventRounds: any[] = [];
  studentCoordinators: any[] = [];
  facultyCoordinators: any[] = [];
  volunteers: any[] = [];
  eventLink: string = "";

  rulesAndDescriptionArray: any[] = [
    {
      id: 1,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLSevsr8-fFqYhAnWOzurrf-re8lbWzshT63NSRoniwgpZuKK1g/viewform',
      eventImg: "../../assets/Fonts/webwave.png",
      eventBackImg: '../../assets/bg/webwave.png',
      event_tagLine: "The HTML CSS Fusion",
      eventDescription: {
        no_of_rounds: 2,
        decription: "Duration: 120 minutes (briefing, design time, and prep for next task)."
      },
      eventRound: [
        {
          round_name: "Revamp the Preformatted",
          roundDescription: [
            {
              description: 'Participants will receive a preformatted web page as a starting point.'
            },
            {
              description: 'Design elements, fonts, and color palettes are provided to align with the futuristic theme.'
            },
            {
              description: 'The task is to create the provided template to create a visually captivating web page.'
            },
            {
              description: 'Participants can use HTML and CSS to improve visuals and user experience.'
            },
            {
              description: 'Participants must work within the given 40-minute time frame.'
            },
            {
              description: 'Coordinators and volunteers are available for assistance if needed.'
            },
          ],
          approx_time: '40 Minutes'
        },
        {
          round_name: "Elevate with Conditions",
          roundDescription: [
            {
              description: 'Participants will receive a distinct design challenge on-site, closely related to the futuristic theme.'
            },
            {
              description: 'The challenge requires participants to create a web page based on specific conditions.'
            },
            {
              description: 'Participants can use HTML and CSS to meet the challenge\'s requirements.'
            },
            {
              description: 'Creativity within constraints is encouraged.'
            },
            {
              description: 'The challenge must be completed within the given 50-minute time frame.'
            },
            {
              description: 'Judges will evaluate based on innovation, theme alignment, technical proficiency, user experience, and functionality.'
            },
            {
              description: 'Further rules for Round 2 will be announced on the spot.'
            },
          ],
          approx_time: '50 Minutes'
        }
      ],
      coordinators: [
        {
          name: "Vishwa Desai",
          img: '../../assets/EventCoordinators/WebWave/vishwa.jpg',
          phone: "9664646587"
        },
        {
          name: "Vaibhav Biyawala Deven",
          img: '../../assets/EventCoordinators/WebWave/vaibhav.jpg',
          phone: "7984343590"
        },
        {
          name: "Dalal Vansh Bhadreshbhai",
          img: '../../assets/EventCoordinators/WebWave/vansh.jpg',
          phone: "7874755265"
        }
      ],
      volunteers: [
        {
          name: "Nikhar Savaliya",
          img: '../../assets/EventCoordinators/WebWave/nikhar.jpg',
          phone: "9664869002"
        },
        {
          name: "Darshan Ukani",
          img: '../../assets/EventCoordinators/WebWave/darshan.jpg',
          phone: "9725464010"
        }
      ],
      faculty_coordinators: [
        {
          img: '',
          name: "Prof.Urmi Desai"
        },
        {
          img: '',
          name: "Prof.Vasundhara Uchhula"
        }
      ],
    },
    {
      id: 2,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe4mJIID3OcS0BUwY6DOUOLZpczHzQUloXorAXSM1xq0IYU6Q/viewform',
      eventImg: "../../assets/Fonts/brainx.png",
      eventBackImg: '../../assets/bg/brainx.png',
      event_tagLine: "Unleash Your Solo Genius",
      eventDescription: {
        no_of_rounds: 3,
        decription: "All the rounds of this event is Solo"
      },
      eventRound: [
        {
          round_name: "Mind Engagements",
          roundDescription: [
            {
              description: 'In the first round, participants will encounter a variety of tasks that test their cognitive abilities. These tasks include SUDOKU, MEMES, MEMORY GAME, MOVIE RECOGNITION, DIALOGUE RECOGNITION. Task will be conducted through pen and paper.'
            },
            {
              description: 'Time limit will be given for each question.'
            },
            {
              description: 'Total 20 Questions will be conducted in Task. In case of tie time factor will be considered.'
            },
            {
              description: 'The top 30 participants with the highest cumulative points will qualify for the second round.'
            }
          ],
          approx_time: '60 Minutes'
        },
        {
          round_name: "The Ultimate Challenge",
          roundDescription: [
            {
              description: 'In the second round, the top 30 participants are divided into groups for three engaging games: 8-PUZZLE IQ, Water Jug IQ, River IQ.'
            },
            {
              description: 'Upon completing these tasks, the top two players from each game will emerge.'
            },
            {
              description: 'Usage of Mobile Phone or Any other device will result into immediate disqualification.'
            }
          ],
          approx_time: '30 Minutes'
        },
        {
          round_name: "Super 6",
          roundDescription: [
            {
              description: 'Quick thinking and broad knowledge will determine the ultimate victor.'
            },
            {
              description: 'Team pressing the buzzer first gets a chance to answer the question'
            },
            {
              description: 'If the answer guessed will be incorrect then it will result in negative marking.'
            },
            {
              description: 'Further instructions will be declared on the spot.'
            },
            {
              description: 'If any inconvenience happens then the decision of coordinators will be considered.'
            },
          ],
          approx_time: '20 Minutes'
        },
      ],
      coordinators: [
        {
          name: "Parth Kunjadiya",
          img: '../../assets/EventCoordinators/BrainX/parth.jpg',
          phone: "9510554054"
        },
        {
          name: "Kirtan Khare",
          img: '../../assets/EventCoordinators/BrainX/kirtan.jpg',
          phone: "9537281166"
        },
        {
          name: "Dhruvil Gelani",
          img: '../../assets/EventCoordinators/BrainX/dhruvil_ghelani.jpg',
          phone: "9601500975"
        }
      ],
      volunteers: [
        {
          name: "Radha Gohil",
          img: '../../assets/EventCoordinators/BrainX/radha_gohil.jpg',
          phone: "9016920249"
        },
        {
          name: "Nirav Paneliya",
          img: '../../assets/EventCoordinators/BrainX/nirav_paneliya.jpg',
          phone: "6352389172"
        }
      ],
      faculty_coordinators: [
        {
          img: '',
          name: "Prof. Jaydeep Barad"
        },
        {
          img: '',
          name: "Prof. Nirali Nanavati"
        }
      ],
    },
    {
      id: 3,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf7GBJPn-sliggOSXy9SxlcNQOv5bIO-dpXLRp1oKc6Wwwutg/viewform',
      eventImg: "../../assets/Fonts/avishkar.png",
      eventBackImg: '../../assets/bg/avishkar.png',
      event_tagLine: "Scet Tank",
      eventDescription: {
        no_of_rounds: 1,
        decription: "Solo as well as Group Event(Min 1 Participant and Max 3 Participant) Participants have to pitch their ideas to the jury You have to compulsory prepare a presentation of your idea You could bring any real/ physical product(Optional) Each Team would get only 3 mins to pitch their ideas."
      },
      eventRound: [],
      coordinators: [
        {
          name: "Aryan Mehta",
          img: '../../assets/EventCoordinators/Avishkar/aryan.jpg',
          phone: "9081170842"
        },
        {
          name: "Ria Kangariwala",
          img: '../../assets/EventCoordinators/Avishkar/ria.jpg',
          phone: "7433046828"
        },
        {
          name: "Fenil Chauhan",
          img: '../../assets/EventCoordinators/Avishkar/fenil_chauhan.jpg',
          phone: "9638402511"
        }
      ],
      volunteers: [],
      faculty_coordinators: [
        {
          img: '',
          name: "Prof. Komal Kansara"
        },
      ],
    },
    {
      id: 4,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdiXC1jCSqvQB3-3SBUA8Rz8wQsbzmIZA804ft0y1L_k8tyLw/viewform',
      eventImg: "../../assets/Fonts/enigma.png",
      eventBackImg: '../../assets/bg/enigma.jpg',
      event_tagLine: "Unlock the Mysteries",
      eventDescription: {
        no_of_rounds: 2,
        decription: "Number of students per team: 2-3 students per team."
      },
      eventRound: [
        {
          round_name: "Mind Busters",
          roundDescription: [
            {
              description: 'Quiz will be conducted through pen and paper.'
            },
            {
              description: 'Questions will be based on logical puzzles.'
            },
            {
              description: '8-10 Question will be there based on riddle.'
            }
          ],
          approx_time: '40-45 Minutes'
        },
        {
          round_name: "Sherlock Holmes: The Casebook",
          roundDescription: [
            {
              description: 'A mystery case will be displayed on the projector.'
            },
            {
              description: 'They have to solve that case with the help of ChatGPT. (They are not allowed to give the entire case to ChatGPT).'
            },
            {
              description: 'They can only use ChatGPT to decode the clues.'
            }
          ],
          approx_time: '60 Minutes'
        }
      ],
      coordinators: [
        {
          name: "Hetvi Jariwala",
          img: '../../assets/EventCoordinators/Enigma/hetvijariwala.jpg',
          phone: "8488929351"
        },
        {
          name: "Rushi Patel",
          img: '../../assets/EventCoordinators/Enigma/rushi.jpg',
          phone: "7359760025"
        },
        {
          name: "Jenil Vaghasiya",
          img: '../../assets/EventCoordinators/Enigma/jenil.jpg',
          phone: "6353954707"
        }
      ],
      volunteers: [
        {
          name: " Om Vasoya",
          img: '../../assets/EventCoordinators/Enigma/omVasoya.png',
          phone: "8320169729"
        },
        {
          name: "Jay Kanavia",
          img: '../../assets/EventCoordinators/Enigma/jay.png',
          phone: "9723461100"
        }
      ],
      faculty_coordinators: [],
    },
    {
      id: 5,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdX7wZyHO6ICLH182zvyf0mNmIS0_Xb0omGX-43WX0w5GHIGw/viewform',
      eventImg: "../../assets/Fonts/twofold.png",
      eventBackImg: '../../assets/bg/twofold.jpg',
      event_tagLine: "Unfold the secret",
      eventDescription: {
        no_of_rounds: 2,
        decription: "All the rounds of this event will be conducted in Team"
      },
      eventRound: [
        {
          round_name: "",
          roundDescription: [
            {
              description: 'Questions will be asked about Vocabulary and Aptitude.'
            },
            {
              description: 'Quiz will be based on critical thinking.'
            },
            {
              description: 'The team who solves the problem statement correctly qualifies as the winner.'
            },
            {
              description: 'Evaluation will be done on the basis of ranking.'
            },
            {
              description: 'In case of tie time factor will be considered.'
            },
            {
              description: 'Usage of Mobile Phone or Any other device will result in immediate disqualification.'
            },
          ],
          approx_time: '60 Minutes'
        },
        {
          round_name: "",
          roundDescription: [
            {
              description: 'Problems will be given in moderate and complex level with all the necessary cipher techniques.'
            },
            {
              description: 'The team who solves the problem statement correctly qualifies as the winner.'
            },
            {
              description: 'In case of tie time factor will be considered.'
            },
            {
              description: 'Usage of Mobile Phone or Any other device will result in immediate disqualification.'
            },
          ],
          approx_time: '45 Minutes'
        }
      ],
      coordinators: [
        {
          name: "Kushal Jasani",
          img: '../../assets/EventCoordinators/TwoFold/Kushal_jasani.jpg',
          phone: "9724998559"
        },
        {
          name: "Kirtan Vaghasiya",
          img: '../../assets/EventCoordinators/TwoFold/kirtan_vaghasiya.jpg',
          phone: "8799483232"
        },
        {
          name: "Aditya Bhakhar",
          img: '../../assets/EventCoordinators/TwoFold/aditya_bhakhar.jpg',
          phone: "9925347434"
        }
      ],
      volunteers: [
        {
          name: "Disha Gopani",
          img: '../../assets/EventCoordinators/TwoFold/disha_gopani.jpg',
          phone: "9104200604"
        },
        {
          name: "Swayam Parekh",
          img: '../../assets/EventCoordinators/TwoFold/swayam.jpg',
          phone: "8347753121"
        },
        {
          name: "Manthan Lad",
          img: '../../assets/EventCoordinators/TwoFold/manthan_lad.jpg',
          phone: "9974548747"
        }
      ],
      faculty_coordinators: [
        {
          name: 'Prof. Bintu Kadhiwala',
          img: ''
        },
        {
          name: 'Prof. Vandana Joshi',
          img: ''
        }
      ],
    },
    {
      id: 6,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLScCoIobM0htqNGz7KU0kTvp4cgPuuYkUymspN-HXJ7BtAFXiA/viewform',
      eventImg: "../../assets/Fonts/whomi.png",
      eventBackImg: '../../assets/bg/whomi.jpg',
      event_tagLine: "Catch Clue And Find Person",
      eventDescription: {
        no_of_rounds: 1,
        decription: "This event will be conducted in Team (Member of 2)."
      },
      eventRound: [
        {
          round_name: "Catch Clue And Find Person",
          roundDescription: [
            {
              description: 'Team members will have to find 3 visible persons (from the pictures). And solve the clues given by them to move a step closer towards the missing person.'
            },
            {
              description: 'The team members will solve the clues correctly and find the missing person within the given time.'
            },
            {
              description: 'The area to search for the missing person will be a SCET area (classroom, staffroom, lab, campus, canteen).'
            },
            {
              description: 'Solving clues using pen paper.'
            },
            {
              description: 'The team that finds the missing person first will be the winner'
            }
          ],
          approx_time: ''
        }
      ],
      coordinators: [
        {
          name: "Prit Savani",
          img: '../../assets/EventCoordinators/whomi/Prit_Savani.png',
          phone: "9979922921"
        },
        {
          name: "Dhruvina Ghodadara",
          img: '../../assets/EventCoordinators/whomi/Dhruvina_Ghodadara.png',
          phone: "8238841335"
        },
        {
          name: "Arpit Navadiya",
          img: '',
          phone: "9925161938"
        }
      ],
      volunteers: [
        {
          name: "Aum Patel",
          img: '../../assets/EventCoordinators/whomi/aum.jpg',
          phone: "9427426912"
        },
        {
          name: "Parth Lathiya",
          img: '../../assets/EventCoordinators/whomi/parth.jpg',
          phone: "9537150942"
        },
        {
          name: "Hetvi Vaghasiya",
          img: '../../assets/EventCoordinators/whomi/hetvi.jpg',
          phone: "7990441511"
        }
      ],
      faculty_coordinators: [],
    },
    {
      id: 7,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfz3OlCF7sl_dFr3lWfH1sgMxpa1n8Vi3hJWpq6P6ehWs3sJw/viewform',
      eventImg: "../../assets/Fonts/cineverse.png",
      eventBackImg: '../../assets/bg/cineverse.jpg',
      event_tagLine: "The Ultimate Cinematic Fusion",
      eventDescription: {
        no_of_rounds: 2,
        decription: "Maximum 3 members per team."
      },
      eventRound: [
        {
          round_name: "Quiz round",
          roundDescription: [
            {
              description: 'Teams can consist of a maximum of three members each. Teams must be registered before the start of the event.'
            },
            {
              description: 'Questions in this round will cover a variety of topics related to movies, series, songs, characters, singers etc which will include BOLLYWOOD as well as HOLLYWOOD categories. These questions may include identifying characters, actors, singers, and related trivia.'
            },
            {
              description: 'Questions will be presented in a multiple-choice format or one word answers.'
            },
            {
              description: 'Total 50 questions will be displayed.'
            },
            {
              description: 'Time limit for 10 seconds will be given for each question.'
            },
            {
              description: 'Some images will be intentionally shown blurred, shadowed or partial.'
            }
          ],
          approx_time: '60 min'
        },
        {
          round_name: "Audio-Visual round (40 min)",
          roundDescription: [
            {
              description: 'Round-2 will feature challenging questions which will include: Identifying Bollywood songs from English Lyrics, Recognising Movies/Series from signature steps, famous quotes or dialogues, Identifying name of song from missing lines of lyrics.'
            },
            {
              description: 'Team pressing the buzzer first gets a chance to answer the question.'
            },
            {
              description: 'If the answer guessed will be incorrect then it will result in negative marking.'
            },
            {
              description: 'Marking scheme will be explained in detail during the event.'
            }
          ],
          approx_time: '40 min'
        },
      ],
      coordinators: [
        {
          name: "Drashti Bhingradiya",
          img: '../../assets/EventCoordinators/Cineverse/drashti.jpg',
          phone: "7435007595"
        },
        {
          name: "Drashti Malaviya",
          img: '../../assets/EventCoordinators/Cineverse/drashti_malviya.jpg',
          phone: "8200893177"
        },
        {
          name: "Jenish Vaghasiya",
          img: '../../assets/EventCoordinators/Cineverse/jenish.jpg',
          phone: "9724992568"
        },
        {
          name: "Yash Dangi",
          img: '',
          phone: "9328587828"
        },
      ],
      volunteers: [
        {
          name: "Divyam Desai",
          img: '../../assets/EventCoordinators/Cineverse/divyam_desai.jpg',
          phone: "9909752166"
        },
        {
          name: "Yug Golakiya",
          img: '../../assets/EventCoordinators/Cineverse/yug_golakiya.jpg',
          phone: "9510705625"
        }
      ],
      faculty_coordinators: [],
    },
    {
      id: 8,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfiWLw72kFZ4AGQ0I9gFqX6dSSve0iuznbIxqddyRAp4TySyg/viewform',
      eventImg: "../../assets/Fonts/skillsynth.png",
      eventBackImg: '../../assets/bg/skillsynth.png',
      event_tagLine: "Where Skills Synthesize into Success.",
      eventDescription: {
        no_of_rounds: 3,
        decription: "SkillSynth is a multifaceted event featuring a quiz, group discussion (GD), and personal interview. This event is a comprehensive test of your knowledge, communication, and individual potential."
      },
      eventRound: [
        {
          round_name: "Current Affairs & Reasoning Challenge",
          roundDescription: [
            {
              description: 'In this opening round, participants will be put to the test with the "Current Affairs & Reasoning Challenge." This segment is designed to assess the knowledge of the latest events and the analytical thinking abilities.'
            },
            {
              description: 'Quiz will be conducted through Google form.'
            },
            {
              description: 'Weightage will be given for each question.'
            },
            {
              description: 'Total 20 Questions will be conducted. In case of tie with same marks, time factor will be considered.'
            },
            {
              description: 'After filtering out results of round of 1, with respect to no of participation top 60% participants will be promoted to the next round.'
            }
          ],
          approx_time: ''
        },
        {
          round_name: "Spontaneous Insights - Group Discussion",
          roundDescription: [
            {
              description: 'The topic will be declared by the jury on the spot, putting your ability to quickly form opinions and articulate your thoughts to the test.'
            },
            {
              description: 'Then selected participants from the GD will have to appear for the personal interview.'
            }
          ],
          approx_time: ''
        },
        {
          round_name: "Individual Spotlight- Personal Assessment",
          roundDescription: [
            {
              description: 'The selected participants from the GD round will be having a one-on-one interview to assess your skills, personality, and potential by an industry person.'
            },
            {
              description: 'Personal Interview'
            },
            {
              description: 'Final winners will be declared by an industry person.'
            }
          ],
          approx_time: ''
        },
      ],
      coordinators: [
        {
          name: "Riddhika Cheruku",
          img: '../../assets/EventCoordinators/SkillSynth/Riddhika_Cheruku.png',
          phone: "9327604924"
        },
        {
          name: "Neeraja Joshi",
          img: '../../assets/EventCoordinators/SkillSynth/neerja_joshi.jpg',
          phone: "6352849431"
        },
        {
          name: "Deep Desai",
          img: '../../assets/EventCoordinators/SkillSynth/deep_desai.jpg',
          phone: "9173440015"
        }
      ],
      volunteers: [
        {
          name: "Rohan Prajapati",
          img: '../../assets/EventCoordinators/SkillSynth/Rohan_Prajapati.png',
          phone: "9979624402"
        },
        {
          name: "Aryan Prajapati",
          img: '../../assets/EventCoordinators/SkillSynth/Aryan_Prajapati.png',
          phone: "7574969717"
        }
      ],
      faculty_coordinators: [
        {
          name: "Prof.Rachana Oza",
          img: ''
        },
        {
          name: "Prof.Snehal Gandhi",
          img: ''
        },
      ],
    },
    {
      id: 9,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfG85PkDD9MlY4YeONS5dFnvQC9PrRHAG7ljp2hm9IWuEMtMg/viewform',
      eventImg: "../../assets/Fonts/stockx.png",
      eventBackImg: '../../assets/bg/stockx.png',
      event_tagLine: "The SCET Stock Exchange",
      eventDescription: {
        no_of_rounds: 2,
        decription: ""
      },
      eventRound: [
        {
          round_name: "Scam 1992",
          roundDescription: [
            {
              description: 'There will be 6 different companies to invest in the stocks.'
            },
            {
              description: 'Everyone will receive the same opening balance.'
            },
            {
              description: '1 Round will contain 3 cycles.'
            },
            {
              description: 'There will be a total of 5 Rounds. (If time doesn’t permit rounds will be - deducted)'
            },
            {
              description: 'You can either buy or sell one company’s stock in one cycle.'
            },
            {
              description: 'Participants will be selected for Final Round according to whoever makes the most net worth from the starting amount.'
            },
            {
              description: 'Different stock’s up or down cards will be given to the participants that determine buying or selling of the stock depending on your own.'
            },
            {
              description: 'Usage of Mobile Phone for Calculator will be allowed.'
            }
          ],
          approx_time: '60 Mins'
        },
        {
          round_name: "Scam 2003",
          roundDescription: [
            {
              description: 'There will be 6 different companies to invest in the stocks.'
            },
            {
              description: 'Everyone will receive the same opening balance.'
            },
            {
              description: '1 Round will contain 3 cycles.'
            },
            {
              description: 'There will be a total of 10 Rounds. (If time doesn’t permit rounds will be - deducted)'
            },
            {
              description: 'You can either buy or sell one company’s stock in one cycle.'
            },
            {
              description: 'Winner will be declared according to whoever makes the most net worth from the starting amount.'
            },
            {
              description: 'Different stock’s up or down cards will be given to the participants that determine buying or selling of the stock depending on your own.'
            },
            {
              description: 'There will be custom cards like Right Issue , Loan , Currency Positive and Negative.'
            },
            {
              description: 'Usage of Mobile Phone for Calculator will be allowed.'
            }
          ],
          approx_time: '60 Mins'
        },
      ],
      coordinators: [
        {
          name: "Kaushal Gadhiya",
          img: '../../assets/EventCoordinators/StockX/kaushal_gadhiya.jpg',
          phone: "8866982198"
        },
        {
          name: "Kenil Vekariya",
          img: '../../assets/EventCoordinators/StockX/Kenil.png',
          phone: "9723354048"
        },
        {
          name: "Vasu Dankhara",
          img: '../../assets/EventCoordinators/StockX/Vasu.png',
          phone: "9870077031"
        }
      ],
      volunteers: [
        {
          name: "Aum Patel",
          img: '../../assets/EventCoordinators/StockX/aum_patel.jpg',
          phone: "9099942139"
        },
        {
          name: "Hetvi Patel",
          img: '../../assets/EventCoordinators/StockX/hetvi_patel.jpg',
          phone: "9426670831"
        },
        {
          name: "Nevi Vaghani",
          img: '../../assets/EventCoordinators/StockX/Nevi.png',
          phone: "8160648663"
        }
      ],
      faculty_coordinators: []
    },
    {
      id: 10,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfKPthwKnJ90KRP5WEOUetNJcsKR4Id9B7YOu0xa0m9cGPB1g/viewform',
      eventImg: "../../assets/Fonts/abhivyakti.png",
      eventBackImg: '../../assets/bg/abhivyakti.png',
      event_tagLine: "Intellectual Gladiators Battle",
      eventDescription: {
        no_of_rounds: 2,
        decription: "A place where ideas clash, arguments are refined, and minds are challenged. gather here for a spirited and intellectually stimulating debate competition that promises to be a showcase of critical thinking, eloquence, and passion."
      },
      eventRound: [
        {
          round_name: "",
          roundDescription: [
            {
              description: 'Around 10 topics will be revealed to participants before one day of event.'
            },
            {
              description: 'They have to prepare those topics and out of them one topic will be assigned by the jury to them.'
            },
            {
              description: 'On that topic they have to debate against their opponent team around 8-10 minutes.'
            },
            {
              description: 'Points will be given on the basis of quality of arguments, hard facts By the jury.'
            },
            {
              description: 'Also there will be negative point system for the not maintaining the decorum, name calling, generalization, and hate speech.'
            },
            {
              description: 'Whichever teams has the highest points will be selected for the final round.'
            },
            {
              description: 'Use of mobile phone or smart watches are not allowed.'
            }
          ],
          approx_time: ''
        },
        {
          round_name: "",
          roundDescription: [
            {
              description: "In this round the selected teams will be provided on the spot topic excluding the 10 topics of 1st round."
            },
            {
              description: 'Teams will also provided pen and paper for this round to make notes and 5 minutes time will be given them to prepare on the spot.'
            },
            {
              description: 'And again they have to debate on that topic against their opponents for 8-10 minutes.'
            },
            {
              description: 'Rigorous fact checking will be done by the jury and based on that 1st, 2nd, 3rd winner teams will be announced.'
            },
            {
              description: 'NOTE: in this final round merging of teams on both sides of debate is possible.'
            }
          ],
          approx_time: ''
        },
      ],
      coordinators: [
        {
          name: "Vishwaa Shah",
          img: '../../assets/EventCoordinators/Abhivyakti/vishwaa.jpg',
          phone: "6351427741"
        },
        {
          name: "Varoon Soneji",
          img: '../../assets/EventCoordinators/Abhivyakti/varoon_soneji.jpg',
          phone: "8866147270"
        }
      ],
      volunteers: [],
      faculty_coordinators: []
    },
    {
      id: 11,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfjWTtIg9ehtIVS-5-qtvAdAAKBNO3QDLrJ3PrDcwOC7lcgdw/viewform',
      eventImg: "../../assets/Fonts/datatrace.png",
      eventBackImg: '../../assets/bg/datatrace.png',
      event_tagLine: "Unlock the Truth",
      eventDescription: {
        no_of_rounds: 2,
        decription: "Number of Participants in a each Group: 3"
      },
      eventRound: [
        {
          round_name: "Find the Culprit",
          roundDescription: [
            {
              description: 'It will be conducted through pen and paper.'
            },
            {
              description: 'A story will be given and participants have to solve that mystery.'
            },
            {
              description: '6 Teams will be selected based on Time Factor.'
            },
            {
              description: 'Avoid asking or discussing any aspect of any competition’s problem during an ongoing contest on any other platform, online or offline.'
            }
          ],
          approx_time: '60 mins'
        },
        {
          round_name: "IP Altas",
          roundDescription: [
            {
              description: "It will be conducted in LAB."
            },
            {
              description: 'Different story lines will be given to each group.'
            },
            {
              description: 'Based on the clues you have to reach the last stage which will be the same for all the teams and Winner will be the one who solves the last clue first.'
            },
            {
              description: 'NO Team will be allowed to take part in round 2 if members are changed.'
            }
          ],
          approx_time: '90 Mins'
        },
      ],
      coordinators: [
        {
          name: "Zenil Dhameliya",
          img: '../../assets/EventCoordinators/DataTrace/zenil_dhameliya.jpg',
          phone: "8154877466"
        },
        {
          name: "Tanvi Dhola",
          img: '../../assets/EventCoordinators/DataTrace/tanvi_dhola.jpg',
          phone: "7016805020"
        },
        {
          name: "Priyanshi Dobariya",
          img: '../../assets/EventCoordinators/DataTrace/priyanshi_dobariya.jpg',
          phone: "7984790671"
        }
      ],
      volunteers: [
        {
          name: "Parthiv Dobariya",
          img: '',
          phone: "7046773652"
        },
        {
          name: "Mitesh Dobariya",
          img: '../../assets/EventCoordinators/DataTrace/mitesh_dobariya.jpg',
          phone: "9099727340"
        },
      ],
      faculty_coordinators: [
        {
          name: 'Prof. Jayesh Chaudhary',
          img: ''
        },
        {
          name: 'Prof. Bhavesh Patel',
          img: ''
        }
      ]
    },
    {
      id: 12,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd3Z3W0iZmvbN5PeEj6y2zZlla4sDnxd4k7yQK_Hyo_Jb6xKw/viewform',
      eventImg: "../../assets/Fonts/hackfix.png",
      eventBackImg: '../../assets/bg/hackfix.png',
      event_tagLine: "Fix The Glitch",
      eventDescription: {
        no_of_rounds: 3,
        decription: "The event revolves around solving errors in unsolved code, which contains numerous issues in computer programming. Participants will be provided with code containing errors, and their task is to identify and rectify these errors. Qualification for the next round will be based on how many errors participants successfully solve."
      },
      eventRound: [
        {
          round_name: "Quizify",
          roundDescription: [
            {
              description: 'Quiz will be conducted online through google form.'
            },
            {
              description: '10 Questions will be asked. The quiz will be based on C and python programming language. Evaluation will be done based on ranking. In the case of tie, the time factor will be considered.'
            }
          ],
          approx_time: '30 mins'
        },
        {
          round_name: "Let’s Find Out",
          roundDescription: [
            {
              description: "The erroneous codes will be given to you and you have to find the error and solve the given problem."
            },
            {
              description: 'The participant who find the error and solve the problem first will be qualified in the next round.'
            },
            {
              description: 'Usage of Mobile Phone or Any other device will result into immediate disqualification.'
            }
          ],
          approx_time: '45 Mins'
        },
        {
          round_name: "Find the error and solve the problem",
          roundDescription: [
            {
              description: "The erroneous codes will be given to you and you have to find the error and solve the given problem. Round 3 is similar to round 2 but there will be some changes regarding programming language."
            },
            {
              description: 'Further instructions will be declared on the spot.'
            }
          ],
          approx_time: '45 Mins'
        }
      ],
      coordinators: [
        {
          name: "Dhrumilsinh Parmar",
          img: '',
          phone: "9265995052"
        },
        {
          name: "Krisha Patel",
          img: '../../assets/EventCoordinators/HackFix/Krisha.png',
          phone: "9925551929"
        },
        {
          name: "Shriya Lukhi",
          img: '../../assets/EventCoordinators/HackFix/lukhi.jpg',
          phone: "9825995867"
        }
      ],
      volunteers: [
        {
          name: "Neel Gadhiya",
          img: '../../assets/EventCoordinators/HackFix/neel_gadhiya.jpg',
          phone: "9925755966"
        },
        {
          name: "Dev Vaghani",
          img: '../../assets/EventCoordinators/HackFix/dev_vaghani.jpg',
          phone: "9313960234"
        },
      ],
      faculty_coordinators: [
        {
          name: 'Prof. Jaydeep Gheewala',
          img: ''
        },
        {
          name: 'Prof. Rakesh Patel',
          img: ''
        }
      ]
    },
    {
      id: 13,
      eventLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeyOuEhYlzL17eU3MK5gsY4S2pePfXgL_inuAA4_O7rWcQHiw/viewform',
      eventImg: "../../assets/Fonts/codify.png",
      eventBackImg: '../../assets/bg/hackfix.png',
      event_tagLine: "Codify: Where Creativity Meets Code",
      eventDescription: {
        no_of_rounds: 3,
        decription: "All the rounds of this event will be conducted in Team (Member of 2)."
      },
      eventRound: [
        {
          round_name: "Quizify",
          roundDescription: [
            {
              description: 'Quiz will be conducted online through google form.'
            },
            {
              description: '15 Questions will be asked about Basic Programming and Aptitude.'
            },
            {
              description: 'The quiz will be based on C programming language.'
            },
            {
              description: 'Evaluation will be done based on ranking.'
            },
            {
              description: 'In the case of tie, the time factor will be considered.'
            },
          ],
          approx_time: '45 Minutes'
        },
        {
          round_name: "Guess the problem statement.",
          roundDescription: [
            {
              description: "The set of codes will be displayed on the screen (one code at a time)."
            },
            {
              description: 'The team who guessed the problem statement qualified for the final round.'
            },
            {
              description: 'Usage of Mobile Phone or Any other device will result into immediate disqualification.'
            }
          ],
          approx_time: '45 Minutes'
        },
        {
          round_name: "Fastest Finger First",
          roundDescription: [
            {
              description: "The students have to complete the code by swapping their position with their team members."
            },
            {
              description: 'The first three teams to solve the code will be declared as winners'
            }
          ],
          approx_time: '45 Minutes'
        }
      ],
      coordinators: [
        {
          name: "Rushal Vaghani",
          img: '../../assets/EventCoordinators/Codify/rushal.jpg',
          phone: "7874242280"
        },
        {
          name: "Tanmay Patel",
          img: '../../assets/EventCoordinators/Codify/tanmay.jpg',
          phone: "9537287756"
        },
        {
          name: "Rahul Mehta",
          img: '',
          phone: "8866658521"
        }
      ],
      volunteers: [
        {
          name: "Dev Italiya",
          img: '../../assets/EventCoordinators/Codify/dev_italiya.jpg',
          phone: ""
        },
        {
          name: "Archi Gazdar",
          img: '../../assets/EventCoordinators/Codify/archi_gazdar.jpg',
          phone: ""
        },
      ],
      faculty_coordinators: [
        {
          name: 'Prof. Dhatri Pandya',
          img: ''
        },
        {
          name: 'Prof. Pranav Rathod',
          img: ''
        }
      ]
    },
  ]

  ngOnInit(): void {
    this.scrollToTop();
    this.route.params.subscribe((params) => {
      this.eventId = params['id']
      if (this.eventId == 0) {
        this.router.navigate(['updates2k23'])
      } else {
        const result = this.rulesAndDescriptionArray.filter(event => event.id === Number(this.eventId));
        if (result) {
          this.eventLogo = result[0].eventImg
          this.eventBackImg = result[0].eventBackImg
          var backImg = document.getElementById('giveBackImg');
          if (backImg) {
            backImg.style.background = `url(${this.eventBackImg})`;
            backImg.style.backgroundSize = 'cover';
          }
          this.eventDescription = result[0].eventDescription
          this.eventRounds = result[0].eventRound
          this.studentCoordinators = result[0].coordinators
          this.facultyCoordinators = result[0].faculty_coordinators
          this.volunteers = result[0].volunteers
          this.eventLink = result[0].eventLink
        }
      }
    })
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  goToLink(url: string) {
    window.open(url, "_blank")
  }

}
