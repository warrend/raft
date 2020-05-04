const tasks = [
  {
    id: 0,
    step: 'one',
    name: 'First Ten Pages',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit earum quos modi.\n\nHarum quia ipsum veritatis ab incidunt minima cum? Voluptatibus asperiores placeat libero similique a, quod sapiente ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit alias autem commodi error, doloremque nesciunt illo quas, dolorum velit explicabo perferendis ab tempore eveniet minima ullam. Perferendis, debitis porro?',
    pagesWritten: 3,
  },
  {
    id: 1,
    step: 'two',
    name: 'Next Ten Pages',
    copy: 'Some copy.',
    pagesWritten: 4,
  },
  {
    id: 2,
    step: 'three',
    name: 'First Plot Point',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit earum quos modi. Harum quia ipsum veritatis ab incidunt minima cum? Voluptatibus asperiores placeat libero similique a, quod sapiente ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit alias autem commodi error, doloremque nesciunt illo quas, dolorum velit explicabo perferendis ab tempore eveniet minima ullam. Perferendis, debitis porro?',
    pagesWritten: null,
  },
  {
    id: 3,
    step: 'four',
    name: 'Take a Break',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit earum quos modi. Harum quia ipsum veritatis ab incidunt minima cum? Voluptatibus asperiores placeat libero similique a, quod sapiente ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit alias autem commodi error, doloremque nesciunt illo quas, dolorum velit explicabo perferendis ab tempore eveniet minima ullam. Perferendis, debitis porro?',
    pagesWritten: null,
  },
  {
    id: 4,
    step: 'five',
    name: 'First Plot Point',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit earum quos modi. Harum quia ipsum veritatis ab incidunt minima cum? Voluptatibus asperiores placeat libero similique a, quod sapiente ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit alias autem commodi error, doloremque nesciunt illo quas, dolorum velit explicabo perferendis ab tempore eveniet minima ullam. Perferendis, debitis porro?',
    pagesWritten: null,
  },
  {
    id: 5,
    step: 'six',
    name: 'Take a Break',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit earum quos modi. Harum quia ipsum veritatis ab incidunt minima cum? Voluptatibus asperiores placeat libero similique a, quod sapiente ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit alias autem commodi error, doloremque nesciunt illo quas, dolorum velit explicabo perferendis ab tempore eveniet minima ullam. Perferendis, debitis porro?',
    pagesWritten: null,
  },
  {
    id: 6,
    step: 'seven',
    name: 'First Plot Point',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit earum quos modi. Harum quia ipsum veritatis ab incidunt minima cum? Voluptatibus asperiores placeat libero similique a, quod sapiente ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit alias autem commodi error, doloremque nesciunt illo quas, dolorum velit explicabo perferendis ab tempore eveniet minima ullam. Perferendis, debitis porro?',
    pagesWritten: null,
  },
  {
    id: 7,
    step: 'eight',
    name: 'Take a Break',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit earum quos modi. Harum quia ipsum veritatis ab incidunt minima cum? Voluptatibus asperiores placeat libero similique a, quod sapiente ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit alias autem commodi error, doloremque nesciunt illo quas, dolorum velit explicabo perferendis ab tempore eveniet minima ullam. Perferendis, debitis porro?',
    pagesWritten: null,
  },
  {
    id: 8,
    step: 'nine',
    name: 'First Plot Point',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit earum quos modi. Harum quia ipsum veritatis ab incidunt minima cum? Voluptatibus asperiores placeat libero similique a, quod sapiente ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit alias autem commodi error, doloremque nesciunt illo quas, dolorum velit explicabo perferendis ab tempore eveniet minima ullam. Perferendis, debitis porro? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit earum quos modi. Harum quia ipsum veritatis ab incidunt minima cum? Voluptatibus asperiores placeat libero similique a, quod sapiente ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit alias autem commodi error, doloremque nesciunt illo quas, dolorum velit explicabo perferendis ab tempore eveniet minima ullam. Perferendis, debitis porro?',
    pagesWritten: null,
  },
  {
    id: 9,
    step: 'ten',
    name: 'Take a Break',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit earum quos modi. Harum quia ipsum veritatis ab incidunt minima cum? Voluptatibus asperiores placeat libero similique a, quod sapiente ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit alias autem commodi error, doloremque nesciunt illo quas, dolorum velit explicabo perferendis ab tempore eveniet minima ullam. Perferendis, debitis porro?',
    pagesWritten: null,
  },
  {
    id: 10,
    step: 'eleven',
    name: 'First Plot Point',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit earum quos modi. Harum quia ipsum veritatis ab incidunt minima cum? Voluptatibus asperiores placeat libero similique a, quod sapiente ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit alias autem commodi error, doloremque nesciunt illo quas, dolorum velit explicabo perferendis ab tempore eveniet minima ullam. Perferendis, debitis porro?',
    pagesWritten: null,
  },
  {
    id: 11,
    step: 'twelve',
    name: 'Take a Break',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit earum quos modi. Harum quia ipsum veritatis ab incidunt minima cum? Voluptatibus asperiores placeat libero similique a, quod sapiente ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit alias autem commodi error, doloremque nesciunt illo quas, dolorum velit explicabo perferendis ab tempore eveniet minima ullam. Perferendis, debitis porro?',
    pagesWritten: null,
  }
]

const intro = [
  {
    id: 0,
    title: "How it Works",
    copy: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eos in, ab qui, sequi alias, atque quos tenetur nesciunt numquam placeat impedit aliquid consectetur excepturi soluta sint minus perspiciatis quisquam."
  },
  {
    id: 1,
    title: "The Basics",
    copy: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eos in, ab qui, sequi alias, atque quos tenetur nesciunt numquam placeat impedit aliquid consectetur excepturi soluta sint minus perspiciatis quisquam."
  },
  {
    id: 2,
    title: "Why Writing is Hard",
    copy: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eos in, ab qui, sequi alias, atque quos tenetur nesciunt numquam placeat impedit aliquid consectetur excepturi soluta sint minus perspiciatis quisquam."
  },
  {
    id: 3,
    title: "How You Will Finish a Draft",
    copy: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eos in, ab qui, sequi alias, atque quos tenetur nesciunt numquam placeat impedit aliquid consectetur excepturi soluta sint minus perspiciatis quisquam."
  },
  {
    id: 4,
    title: "Next Steps",
    copy: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eos in, ab qui, sequi alias, atque quos tenetur nesciunt numquam placeat impedit aliquid consectetur excepturi soluta sint minus perspiciatis quisquam."
  }
]

export {
  tasks, 
  intro,
}
