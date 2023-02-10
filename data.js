export const adventureData = [
  {
    id: 0,
    text: 'Welcome to the adventure! You wake up on a deserted beach. You can\'t remember how you got here, but there are bits of driftwood all around, seemingly from a shipwreck. In front of you looms a dense jungle and the shore stretches out as far as you can see in either direction. Do you go "left", "right", or "straight"?', 
    options: [
      {
        choice: 'left',
        nextId: 1
      },
      {
        choice: 'right', 
        nextId: 3
      },
      {
        choice: 'straight', 
        nextId: 2
      }
    ]
  },
  {
    id: 1,
    text: 'You proceed left and come to a rocky outcropping with a lighthouse. You don\'t see anyone around but the light is slowly turning. Do you "investigate" further or "continue" walking?', 
    options: [
      {
        choice: 'investigate',
        nextId: 4
      },
      {
        choice: 'continue', 
        nextId: 5
      }
    ]
  },
  {
    id: 2,
    text: 'You make slow progress through the dense jungle foliage. The mosquitoes are ravenous and you are feeling worried about the plants you keep brushing against. Do you "keep going" or "retreat"?', 
    options: [
      {
        choice: 'keep going',
        nextId: 6
      },
      {
        choice: 'retreat', 
        nextId: 7
      }
    ]
  },
  {
    id: 3,
    text: 'The beach in this direction stretches on forever with no sign of any people or even animals. As the sun beats down you decide to stop and take a rest. Do you "sit on the beach" or "find a place to hide"?', 
    options: [
      {
        choice: 'sit on the beach',
        nextId: 8
      },
      {
        choice: 'find a place to hide', 
        nextId: 9
      }
    ]
  },
  {
    id: 4,
    text: 'You find the door unlocked and encounter a tight spiral staircase. Oddly, the stairs lead not only up to where the light is spinning but also down underground...do you walk "up" or "down" the stairs?', 
    options: [
      {
        choice: 'up',
        nextId: 10
      },
      {
        choice: 'down', 
        nextId: 11
      }
    ]
  },
  {
    id: 5,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 6,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 7,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 8,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 9,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 10,
    text: 'The staircase continues up to a small room containing the spinning light. It looks like a pretty simple mechanism, and you think you might be able to signal a passing ship for help. Do you "try" to send a signal, or "go back" to the beach to continue exploring?', 
    options: [
      {
        choice: 'try',
        nextId: 12
      },
      {
        choice: 'go back', 
        nextId: 0
      }
    ]
  },
  {
    id: 11,
    text: 'As you cautiously take a step, the staircase suddenly becomes a smooth slide and you are propelled downward. The sensation of falling ends with a sudden splash!', 
    options: [
      {
        choice: '',
        nextId: 0
      }
    ]
  },
  {
    id: 12,
    text: 'You aim the light directly at a passing ship and make what you hope is the pattern for SOS. You are initially excited when the ship turns your way, but you realize your mistake too lake as it crashes into the rocks below. Well, at least now you\'ll have some company!', 
    // options: [
    //   {
    //     choice: '',
    //     nextId: 100
    //   }
    // ]
  },
  {
    id: 13,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 14,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 15,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 16,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 17,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 18,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 19,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 20,
    text: '', 
    options: [
      {
        choice: '',
        nextId: 0
      },
      {
        choice: '', 
        nextId: 0
      }
    ]
  },
  {
    id: 100,
    text: 'Thanks for playing!', 
  }
]