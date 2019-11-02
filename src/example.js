import * as uuid from "uuid/v4";

// const classDropin = {
//   title: 'B&B La Primula - "Yellow Room"',
//   description: '',
//   location: {
//     name: '',
//     description: '',
//     longitude: '',
//     latitude: '',
//     streetAddressLineOne: '2535 36th Street',
//     streetAddressLineTwo: 'Apt 1F',
//     city: 'Astoria',
//     state: 'NY',
//     zipcode: '11103'
//   },
//   images: ['/apt1.jpg', '/apt2.jpg'],
//   amentites: ['Laptop friendly workspace'],
//   classDates: [
//     {
//       start: 'TIMESTAMP',
//       end: 'TIMESTAMP',
//       maxGuestCount: '3',
//       isFull: false,
//       whenToArrive: '',
//       materialsNeeded: ''
//     }
//   ],
//   ratings: [],
//   owner: {
//     name: 'Michael Angelo',
//     image: '/user.jpg',
//     skillset: ['Classical Pianist'],
//     socialMedia: {
//       instagram: ''
//     },
//     contact: {
//       email: 'yamikamisama@gmail.com',
//       phoneNumber: '8565626606'
//     }
//   }
// };

export const classes = [
  {
    id: uuid(),
    title: "Opera Singer`s Dream Studio",
    description:
      "Join us for this 50 minute class. The single most important thing a human can do for their health is exercise regularly. Therefore, a fit BODY is a healthy BODY, and a healthy body leads to a healthy mind and spirit. BODY is a fitness methodology based on the core principles of CrossFit, HIIT, and traditional Strength and Conditioning programs. Body is designed for anyone seeking self-improvement, whatever that means to YOU. Classes are team-oriented to develop social connections, build a passionate fitness community, and encourage participants to push harder than they would on their own. You only have one BODY and each day is an opportunity to improve. AM Booking Policy: Cancel your class enrollment no less than 12-hour prior to the class start time to avoid a no-show fee of $10 or loss of session credit. Enrollment cancelation less than 12-hour prior to the class start time will incur a $10 late cancelation fee or loss of session credit.",
    level: "",
    location: {
      name: "",
      description: "",
      longitude: "-73.9143598",
      latitude: "40.7682166",
      streetAddressLineOne: "2535 36th Street",
      streetAddressLineTwo: "Apt 1F",
      city: "Astoria",
      state: "NY",
      zipcode: "11103"
    },
    images: ["/apt1.jpg", "/apt2.jpg"],
    amentites: ["Piano"],
    price: "50",
    classDates: [
      {
        start: "TIMESTAMP",
        end: "TIMESTAMP",
        maxGuestCount: "3",
        isFull: false,
        whenToArrive: "",
        materialsNeeded: ""
      }
    ],
    ratings: [
      {
        score: 4.8,
        review:
          "Such a great way to learn a new language.  I have been trying for years to learn Japanese and this has really opened my world up with the right level of intensity."
      }
    ],
    owner: {
      name: "Michael Angelo",
      image: "/user.jpg",
      skillset: ["Music"],
      socialMedia: {
        instagram: ""
      },
      contact: {
        email: "yamikamisama@gmail.com",
        phoneNumber: "8565626606"
      }
    }
  },
  {
    id: uuid(),
    title: "Quaint Astoria Brownstone",
    description: "",
    location: {
      name: "",
      description: "",
      longitude: "-73.9264744",
      latitude: "40.766257",
      streetAddressLineOne: "2322 30th Rd",
      streetAddressLineTwo: "Apt 9F",
      city: "Astoria",
      state: "NY",
      zipcode: "11102"
    },
    images: ["/apt1.jpg", "/apt2.jpg"],
    amentites: ["Gamers"],
    price: "50",
    classDates: [
      {
        start: "TIMESTAMP",
        end: "TIMESTAMP",
        maxGuestCount: "3",
        isFull: false,
        whenToArrive: "",
        materialsNeeded: ""
      }
    ],
    ratings: [],
    owner: {
      name: "Xiran Ou",
      image: "/user.jpg",
      skillset: ["Programmer"],
      socialMedia: {
        instagram: ""
      },
      contact: {
        email: "xiranou@gmail.com",
        phoneNumber: "8565626606"
      }
    }
  },
  {
    id: uuid(),
    title: "Knitters Haven",
    description: "",
    location: {
      name: "",
      description: "",
      longitude: "-73.9265166",
      latitude: "40.7678631",
      streetAddressLineOne: "3094 Crescent St",
      streetAddressLineTwo: "Apt 1F",
      city: "Astoria",
      state: "NY",
      zipcode: "11103"
    },
    images: ["/apt1.jpg", "/apt2.jpg"],
    amentites: ["Laptop friendly workspace"],
    price: "50",
    classDates: [
      {
        start: "TIMESTAMP",
        end: "TIMESTAMP",
        maxGuestCount: "3",
        isFull: false,
        whenToArrive: "",
        materialsNeeded: ""
      }
    ],
    ratings: [],
    owner: {
      name: "Michael Angelo",
      image: "/user.jpg",
      skillset: ["Classical Pianist"],
      socialMedia: {
        instagram: ""
      },
      contact: {
        email: "yamikamisama@gmail.com",
        phoneNumber: "8565626606"
      }
    }
  },
  {
    id: uuid(),
    title: "Artist Loft",
    description: "",
    location: {
      name: "",
      description: "",
      longitude: "-73.9265166",
      latitude: "40.7678631",
      streetAddressLineOne: "56 Richardson St",
      streetAddressLineTwo: "Apt 2A",
      city: "Brooklyn",
      state: "NY",
      zipcode: "11211"
    },
    images: ["/apt1.jpg", "/apt2.jpg"],
    amentites: ["Laptop friendly workspace"],
    price: "50",
    classDates: [
      {
        start: "TIMESTAMP",
        end: "TIMESTAMP",
        maxGuestCount: "3",
        isFull: false,
        whenToArrive: "",
        materialsNeeded: ""
      }
    ],
    ratings: [],
    owner: {
      name: "Margaret Decarlo",
      image: "/user.jpg",
      skillset: ["Designer"],
      socialMedia: {
        instagram: ""
      },
      contact: {
        email: "margaretdecarlo@gmail.com",
        phoneNumber: "8565626606"
      }
    }
  }
];

// exampleAmentites
// Pet Amenities
//   Pet-Friendly
//   Dog park
//   Dog washing station
//   Large dogs allowed
//   Multiple pets allowed
// Transportation and Parking Amenities
//   Garages
//   Covered parking
//   Assigned parking spaces
//   Bike storage lockers
//   Shared car services
//   Electric car charging stations
//   Pedestrian-friendly - Walk Score
//   Bus stop/Public transportation access
// Laundry Amenities
//   Shared laundry room
//   Washers and dryers in the units
//   Laundry service
// Kitchen Amenities
//   Dishwasher in unit
//   High-end kitchen appliances
//   High-end countertops and finishes
//   Energy-efficient appliances
// Unit Amenities
//   Air-conditioning
//   Fireplace
//   Patio or balcony
//   Wood flooring
//   Storage in unit
// Tech Amenities
//   Charging outlets with USB ports
//   Smart Controls for Heating/Cooling
//   Wifi
//   High-Speed Internet
//   Cable or Satellite TV
//   Online Options for leasing, paying rent, and making maintenance requests
// Recreation Amenities
//   Fitness center
//   Spa
//   Yoga/dance studio
//   Pool
//   Playground
//   Community Center
//   Media room
//   Party room
//   Community events and classes
//   Outdoor areas
//   Jogging/walking/bike path or access to one nearby
// Family Amenities
//   Playground
//   Close to schools
//   Babysitting/Afterschool services
// Miscellaneous Amenities
//   Storage
//   Security cameras
//   Security guard
//   Doorman
//   Gated access
//   Valet trash
//   Recycling center
//   Doorstep recycling collection

// Academic Tuition
// Arts
// Board Games
// Car Sharing
// Car/Bike Maintenance
// Christmas Tasks
// Collectables
// Cookery
// Crafts
// DIY/Chores
// Early Years Education
// Gardening & Horticulture
// Hair And Beauty
// Health
// Healthy Living
// Hobbies
// Home Sharing
// Home Swap
// IT Skills
// Languages
// Life Skills
// Mentoring(Career)
// Mentoring(Life)
// Music
// Personal Grooming
// Pets/Animals
// Professional Services
// Sports
// Travel Tips
// Volunteering

// New Language
// Learn How to Draw
// Basic Car Repairs
// Home Cleaning and Decluttering
// Photography
// Learn to Play the Guitar
// Learn to Play the Piano
// Gardening
// Cook
// Crafting
// Fine Arts
// Life Skills
// Dancing
// Life Coach
// Sewing, Stitching and Patching
// Skill of Mindful Living
// Creating a Personal Budget
// How to Repair Credit
// Manage Your Debt
// Money Management

// Health and Fitness
//   - Breathing/Deep Breathing Skill
//   - Swimming Skill
//   - Yoga & Stretch
//   - Get Good Sleep
//   - Fitness Coaching

// Communication Skills
//   - Write a Professional Resume
//   - How to Write an Effective Speech
//   - How to Speak to an Audience
//   - Learn to Network

// Business Skills
//   - Business Skills Fundamentals
//   - Accounting and Bookkeeping Basics
//   - Art of Negotiating
//   - Goal-Setting Skills
