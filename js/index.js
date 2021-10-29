document.addEventListener('DOMContentLoaded', function () {
  const vm_nav = new Vue({
    el: '#nav',
    data: {
      backgroundClass: 'transparent',
    },
    created() {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll(event) {
        if (window.scrollY > 0) {
          this.backgroundClass = 'glass'
        } else {
          this.backgroundClass = 'transparent'
        }
      },
    },
  })

  const vm_coursework = new Vue({
    el: '#coursework',
    data: {
      courseworks: [
        {
          college: 'Stony Brook University',
          semesters: [
            {
              time: 'Fall 2021',
              name: 'Sem 1',
              courses: [
                {
                  name: 'Introduction to Computer Vision',
                  professor: 'Prof Michael Ryoo',
                },
                {
                  name: 'Data Science Fundamentals',
                  professor: 'Prof Steven Skienna',
                },
                {
                  name: 'Analysis of Algorithms',
                  professor: 'Prof Michael Bender',
                },
              ],
              projects: [
                {
                  title: 'Use of Twitter activity data to analyze Circadian Rhythms',
                  topic: 'Data Science'
                },
                {
                  title: 'Coming soon!',
                  topic: 'Computer Vision'
                }
              ]
            },
          ],
        },
      ],
    },
  })

  const vm_experience = new Vue({
    el: '#experience',
    data: {
      experiences: [
        {
          company: 'Stony Brook University',
          logo: '/images/logos/SBU.png',
          location: 'New York, USA',
          positions: [
            {
              title: 'Graduate Teaching Assistant',
              description: `
                This semester, I am assisting Prof. Kevin McDonald
                in 'Computer Science Principles'. I teach Python
                and Introductory Data Science to undergraduate
                kids and help them code better. I am also
                responsible for grading their assignments and
                proctoring their exams.
              `,
              dates: 'Aug 2021 - Current',
            },
          ],
        },

        {
          company: 'Deloitte Consulting',
          logo: '/images/logos/Deloitte.png',
          location: 'Mumbai, India',
          positions: [
            {
              title: 'Analyst/Developer',
              description: `
                I worked on the State of Michigan Integrated  Eligibility Project as a developer where I: 
                <br />
                &bull; Enhanced an Automated Decision Engine for Eligibility Determination built on Spring framework for a database of 6M beneficiaries.
                <br />
                &bull; Proposed, led and delivered a framework to generate Selenium scripts to automate driver flow of 758 web pages that acquired a revenue worth $11M  from the client. 
                <br />
                &bull; Engineered an auto-invoking batch script in Shell for Bamboo server that conserved manual effort by 175%
              `,
              dates: 'Jan 2020 - July 2021',
            },
          ],
        },

        {
          company: 'Persistent Systems',
          logo: '/images/logos/Persistent.png',
          location: 'Pune, India',
          positions: [
            {
              title: 'Research Intern',
              description: `
                &bull; Discovered a mind-controlled communication system for Quadriplegic and differently abled individuals using 5-channel EEG headset and 4-layer LSTM network. The ’thought’ data was preprocessed using Principal Component Analysis.
                <br />
                &bull; Demonstrated a streamlined model on 323 user actions, 100+ different users with a response time of 2 seconds with an accuracy of 93%. 
                <br />
                &bull; <a href="#publications">Patent: A System and Method for Dynamic Virtual Structuring Of Parkings in Real-Time [Application#: 201921051068]</a>
              `,
              dates: 'July 2018 - July 2019',
              supervisor: 'Purushottam Darshankar',
            },

            {
              title: 'Research Intern',
              description: `
                I developed an obstacle detection-avoidance algorithm hosted on NVIDIA Jetson TX2, ZED Stereo Camera. The Reinforcement Learning algorithm was built using OpenAI Gym, ROS.
                <br />
                We built a Neural Network with Q-Learning technique to control action-states.
              `,
              dates: 'July 2017 - June 2018',
              supervisor: 'Gaurav Gupta',
            },
          ],
        },

        {
          company: 'MIT Data Structures Lab',
          logo: '/images/logos/MIT.jpg',
          location: 'Pune, India',
          positions: [
            {
              title: 'Teaching Assistant',
              description: `
                Taught Data Structures and Algorithms to a class of 200 students during my junior year.
              `,
              dates: 'June 2017- May 2019',
            },
          ],
        },

        {
          company: 'MIT Robocon Lab',
          logo: '/images/logos/MIT.jpg',
          location: 'Pune, India',
          positions: [
            {
              title: 'Researcher',
              description: `
                We developed Autonomous Robots which learn from imagery inputs to plan robot trajectories in obstacle course for ABU Robocon, Asia Pacific. Researched on line tracing techniques and serial communication methods.
              `,
              dates: 'Jan 2016 - April 2018',
            },
          ],
        },
      ],
    },
  })
})
