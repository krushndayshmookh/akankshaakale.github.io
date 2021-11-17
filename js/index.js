let $vm = {}

document.addEventListener('DOMContentLoaded', function () {
  $vm.nav = new Vue({
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

  $vm.featured = new Vue({
    el: '#featured',
    data: {
      carousel: null,
      carouselHeight: 600,
      interval: null,

      headers: [
        'Singapore India Hackathon 2018',
        'KPIT Sparkle 2019',
        'Smart India Hackathon 2018',
      ],

      activeHeader: 0,
    },
    methods: {
      initCarouel() {
        let element = document.getElementById('featured-carousel')

        this.carouselHeight = (element.clientWidth * 3) / 4
        this.carousel = M.Carousel.init(element, {
          fullWidth: true,
          indicators: true,
          onCycleTo: this.onCycleTo,
        })
        this.startAutoPlay()
      },

      carouselPrev() {
        this.carousel.prev()
      },

      carouselNext() {
        this.carousel.next()
      },

      startAutoPlay() {
        let vm = this
        this.interval = setInterval(() => {
          vm.carouselNext()
        }, 3000)
      },

      onCycleTo(element) {
        let index = element.attributes['data-index'].value
        this.activeHeader = index
      },
    },
    mounted() {
      this.initCarouel()
    },
    destroyed() {
      clearInterval(this.interval)
    },
  })

  $vm.coursework = new Vue({
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
                  title:
                    'Use of Twitter activity data to analyze Circadian Rhythms',
                  topic: 'Data Science',
                },
                {
                  title: 'Coming soon!',
                  topic: 'Computer Vision',
                },
              ],
            },
          ],
        },
      ],
    },
  })

  $vm.awards = new Vue({
    el: '#awards',
    data: {
      awards: [
        {
          event: 'Deloitte GPS Game Changer Award',
          date: '2021',
          position: '1 in 5000',
          description:
            'For singlehandedly tailoring a custom framework alongside regular deliverables and acquiring additional revenue from the client',
          icon: '/images/awards/prize.png',
        },
        {
          event: 'Deloitte Spot Award for Automation',
          date: '2020',
          position: '1 amongst 500',
          description:
            'Was amongst the very first folks in my project to be recognized for Spot Award for impactful delivery of Automation Framework.',
          icon: '/images/awards/prize.png',
        },
        {
          event: 'KPIT Sparkle Innovation Challenge ’19',
          date: '2019',
          position: 'Gold Medal | Finalist',
          description:
            "'Thought' controlled Authentication system using EEG headset.",
          icon: '/images/awards/trophy.png',
        },
        {
          event: 'Smart India Hackthon 2019, IIT BHU',
          date: '2019',
          position: '3rd/250 | National',
          description:
            'Intelligent Digital Traffic Management/ Information System using Geo Coordinates',
          icon: '/images/awards/trophy.png',
        },
        {
          event: 'Singapore India Hackathon, NTU Singapore',
          date: '2018',
          position: '2nd Runner Up | International',
          description:
            'A smart solution to monitor and provide visibility on the availability of vacant car park lots within the campus.',
          icon: '/images/awards/trophy.png',
        },
        {
          event: 'Smart India Hackathon 2018, IIT BHU',
          date: '2018',
          position: 'Winner | National',
          description:
            'Collection, analysis, visualization of data regarding water usage and irrigation deficiencies from the data collected from farmers. Provide a platform for irrigation officials to optimize the water distribution in areas facing scarcity.',
          icon: '/images/awards/trophy.png',
        },
        {
          event: "Prime Minister's Scholarship",
          date: '2015-2019',
          description:
            'This was awarded to me by the Ministry of Defense throughout my Undergraduate Studies for consistent all round performance in the filed of Computer Science.',
          icon: '/images/awards/prize.png',
        },
      ],
    },
  })

  $vm.experience = new Vue({
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

        {
          company: 'OSCAR Foundation',
          logo: '',
          location: '',
          positions: [
            {
              title: 'Volunteer',
              description: `
              During the peak of the pandemic, I volunteered for this thread where I with the help of Oscar foundation, Mumbai taught Mathematics to under-privileged kids so that they do not lack the basic foundation as schools were shut down and private tuitions were not affordable to these students. I taught two kids, Zubia and Sanika, for months and helped them buckle up for their board exams.  
              `,
              dates: 'Giving Back',
            },
          ],
        },
      ],
    },
  })

  $vm.publications = new Vue({
    el: '#publications',
    data: {
      publications: [
        {
          title:
            'A System and Method to Perform User Activity Using an Electroencephalogram',
          journal: 'Indian Patent Office',
          icon: '/images/publications/1.jpg',
          link: '/docs/publications/1.pdf', // TODO: Add link
        },
        {
          title:
            'Recurrent Neural Networks on EEG based Classification for Brain Computer Interface.',
          journal: 'Indian Patent Office',
          icon: '/images/publications/2.jpg',
          link: '/docs/publications/2.pdf', // TODO: Add link
        },
        {
          title:
            'A System and Method for Self-Adapting Virtual Structuring Of Unstructured Parking in Real-Time',
          journal: 'Indian Patent Office',
          icon: '/images/publications/3.jpg',
          link: '/docs/publications/3.pdf', // TODO: Add link
        },
      ],
    },
  })

  $vm.skills = new Vue({
    el: '#skills',
    data: {
      skills: [
        {
          title: 'Python',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
        {
          title: 'Java',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          title: 'C++',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        },
        {
          title: 'JavaScript',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          title: 'Angular',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        },
        {
          title: 'C',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        },
        {
          title: 'Android',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
        },
        {
          title: 'Oracle',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
        },
        {
          title: 'MySQL',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          title: 'MongDB',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        },
        {
          title: 'Docker',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
          title: 'Amazon Web Services',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
        },
        {
          title: 'Bitbucket',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
        },
        {
          title: 'Git',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
        {
          title: 'Linux',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        },
        {
          title: 'Visual Studio Code',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        },
        {
          title: 'Arduino',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
        },
        {
          title: 'OpenCV',
          image: '/images/skills/opencv.png',
        },
        {
          title: 'MATLAB',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
        },
        {
          title: 'Jupyter',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg',
        },
        {
          title: 'Tensorflow',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        },
        {
          title: 'LaTeX',
          image: '/images/skills/latex.png',
        },
        {
          title: 'GitHub',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        },
        {
          title: 'Spring',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          title: 'PyTorch',
          image: '/images/skills/pytorch.png',
        },
        {
          title: 'Jira',
          image:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
        },
      ],
    },

    mounted() {
      var elems = document.querySelectorAll('#skills .tooltipped')
      var instances = M.Tooltip.init(elems, {
        position: 'top',
      })
    },
  })

  $vm.projects = new Vue({
    el: '#projects',
    data: {
      projects: [
        {
          title: 'Intelligent Parking Monitoring',
          image: '/images/projects/sish.jpg',
          description: 'NTU, Singapore',
          link: '',
          github: '',
          youtube: 'https://www.youtube.com/watch?v=tivoU7KuZIE',
        },
        {
          title: 'Brain Computer Interface',
          image: '/images/projects/kpit.jpg',
          description: 'KPIT Sparkle 2019',
          link: 'https://www.linkedin.com/posts/akankshaakale_learnwhatmatters-activity-6529625809278341120-E7gw',
          github: '',
          youtube: '',
        },
        // {
        //   title: 'Jennifer Page',
        //   image: '/images/projects/traffic.PNG',
        //   description: 'Apps Designer',
        //   link: '',
        //   github: '',
        //   youtube: '',
        // },
        {
          title: 'Traffic',
          image: '/images/projects/parkings.jpg',
          description: 'Smart India Hackathon 2019',
          link: '',
          github: '',
          youtube: '',
        },
        {
          title: 'Hand Sign Detection',
          image: '/images/projects/handsign.jpg',
          description: '',
          link: '',
          github: '',
          youtube: '',
        },
        // {
        //   title: 'The Cultural Team',
        //   image: '/images/projects/aarohan.jpg',
        //   description: '',
        //   link: 'https://photos.app.goo.gl/4TimkUJsPzZjNt777',
        //   github: '',
        //   youtube: '',
        // },
        {
          title: 'Twitter and Circadian Rhythms',
          description: 'More on this soon.',
        },
        // {
        //   title: 'Another Computer Vision Project',
        //   description: 'More on this soon.',
        // },
      ],
    },
  })

  $vm.contact = new Vue({
    el: '#contact',
    data: {
      contactInfo: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    },

    methods: {
      submitForm() {
        showWait()
        const data = {
          name: this.contactInfo.name,
          email: this.contactInfo.email,
          phone: this.contactInfo.phone,
          message: this.contactInfo.message,
        }

        fetch('https://rootkings-mail-service.herokuapp.com/api/mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            apiKey: '617d9c95c1dbc10004417a28',
            subject: 'New Enquiry at akankshakale.com',
            body: `
              name: ${data.name} <br>
              email: ${data.email} <br>
              phone: ${data.phone} <br>
              message: ${data.message}
              `,
          }),
        })
          .then(response => response.json())
          .then(data => {
            hideWait()

            M.toast({
              html: 'Your message has been received!',
            })

            this.contactInfo = {
              name: '',
              email: '',
              phone: '',
              message: '',
            }
          })
          .catch(error => {
            console.error(error)
            hideWait()

            M.toast({
              html: 'Failed to send message. Please try again.',
            })
          })
      },
    },
  })

  $vm.artwork = new Vue({
    el: '#artwork',
    data: {
      artwork: {
        col_1: [
          '/images/gallery/artwork/B612_20160908_094500.jpg',
          '/images/gallery/artwork/B612_20160915_192854.jpg',
          '/images/gallery/artwork/B612_20170104_212107.jpg',
          '/images/gallery/artwork/IMG_20160906_180107.jpg',
          '/images/gallery/artwork/IMG-20160906-WA0001.jpg',
          '/images/gallery/artwork/IMG-20160906-WA0003.jpg',
          '/images/gallery/artwork/IMG_20160912_164429.jpg',
        ],
        col_2: [
          '/images/gallery/artwork/IMG_20160915_202004.jpg',
          '/images/gallery/artwork/IMG-20160925-WA0007.jpg',
          '/images/gallery/artwork/IMG_20170204_175108.jpg',
          '/images/gallery/artwork/IMG_20170208_180141.jpg',
          '/images/gallery/artwork/IMG_20180116_170653.jpg',
          '/images/gallery/artwork/IMG-20180521-WA0004.jpg',
          '/images/gallery/artwork/IMG_20160915_173858.jpg',
        ],
      },
    },
  })

  $vm.photography = new Vue({
    el: '#photography',
    data: {
      photography: {
        col_1: [
          '/images/gallery/photography/IMG_20181114_200552-02.jpg',
          '/images/gallery/photography/IMG_20181231_180849-02.jpeg',
          '/images/gallery/photography/IMG_20190622_113641_470.jpg',
          '/images/gallery/photography/PicsArt_06-23-09.48.00-02-1.jpg',
          '/images/gallery/photography/IMG_20181114_203818-02.jpg',
          '/images/gallery/photography/IMG_20190120_173547_Bokeh__01.jpg',
          '/images/gallery/photography/20200705_191244-01.jpg',
          '/images/gallery/photography/DSC_3758.jpg',
          '/images/gallery/photography/IMG_20181114_190839.jpg',
        ],
        col_2: [
          '/images/gallery/photography/IMG_20200313_191711.jpg',
          '/images/gallery/photography/IMG-20181114-WA0022-01-1.jpg',
          '/images/gallery/photography/IMG_20190228_163658-01.jpg',
          '/images/gallery/photography/IMG_20210414_115327_758.jpg',
          '/images/gallery/photography/IMG_20181115_102930__01.jpg',
          '/images/gallery/photography/IMG_20190429_014854.jpg',
          '/images/gallery/photography/IMG_20210414_120346_179.jpg',
          '/images/gallery/photography/IMG_20190125_232535_125.jpg',
          '/images/gallery/photography/IMG_20200308_183936.jpg',
        ],
      },
    },
  })

  $vm.extras = new Vue({
    el: '#extras',
    data: {
      images: [
        '/images/gallery/aarohan/graciaPerformance1.jpg',
        '/images/gallery/aarohan/UNADJUSTEDNONRAW_thumb_a3f.jpg',
        '/images/gallery/aarohan/UNADJUSTEDNONRAW_thumb_a4c.jpg',
      ],
    },
  })
})
