export const adventureData = [
  {
    id: 0,
    text: 'You can\'t remember how you got here, but there are bits of driftwood all around, seemingly from a shipwreck. In front of you looms a dense jungle and the shore stretches out as far as you can see in either direction. Do you go "left", "right", or "straight"?', 
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
        nextId: 0
      }
    ]
  },
  {
    id: 3,
    text: 'The beach in this direction stretches on forever with no sign of any people or even animals. As the sun beats down you decide to stop and take a rest. Do you "sit on the beach" or "keep going"?', 
    options: [
      {
        choice: 'sit on the beach',
        nextId: 8
      },
      {
        choice: 'keep going', 
        nextId: 3
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
    text: 'The beach continues for a ways until a rocky cliff blocks your path. Do you attempt to "climb" or head into the "jungle"?', 
    options: [
      {
        choice: 'climb',
        nextId: 13
      },
      {
        choice: 'jungle', 
        nextId: 2
      }
    ]
  },
  {
    id: 6,
    text: 'Tired and itchy, you finally come upon what seems to be the remains of an ancient temple. You can\'t make out any of the writing, but even though overgrown with jungle plants, the site itself is in really good condition. There are two obvious doors, one at the "top" and one leading "underground". Which do you choose? ', 
    options: [
      {
        choice: 'top',
        nextId: 7
      },
      {
        choice: 'underground', 
        nextId: 11
      }
    ]
  },
  {
    id: 7,
    text: 'As you step inside, you have to shield your eyes from the glimmering reflection of gold that greets you. The room is filled to the ceiling with treasure. You may be stuck on this mysterious island forever, but at least you can retire in style!', 
    options: [
      
    ]
  },
  {
    id: 8,
    text: 'As the sun beats down from overhead, you start to wish you had washed up with an umbrella, or at least something to drink. You can no longer resist the urge to sleep, and lay your head down in the soft sand. "continue"', 
    options: [
      {
        choice: 'continue',
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
    text: 'As you cautiously take a step, the staircase suddenly becomes a smooth slide and you are propelled downward. The sensation of falling ends with a sudden splash! "continue".', 
    options: [
      {
        choice: 'continue',
        nextId: 0
      }
    ]
  },
  {
    id: 12,
    text: 'You aim the light directly at a passing ship and make what you hope is the pattern for SOS. You are initially excited when the ship turns your way, but you realize your mistake too late as it crashes into the rocks below. Well, at least now you\'ll have some company!', 
    options: [
    ]
  },
  {
    id: 13,
    text: 'The climbing is easy going at first but soon there are fewer handholds and the ones you can find are slippery. At one particularly tricky part you make a desparate leap for a ledge but it collapses under your wait. You free fall for a few seconds before landing with a splash. "continue".', 
    options: [
      {
        choice: 'continue',
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
  }
]