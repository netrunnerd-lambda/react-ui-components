const date = new Date().toDateString().split(' '),
      month = date[1],
      day = date[2];

const Data = [
  {
    imgUrl: 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png',
    imgAlt: 'a red Lambda School logo',
    header: {
      text: {
        title: 'Lambda School',
        date: `${month} ${day}`,
        content: "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!",
      }
    },
    card: {
      imgUrl: 'https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png',
      imgAlt: 'React logo',
      text: {
        heading: 'Get started with React',
        content: 'React makes it painless to create interactive UIs. Design simple views for each state in your application.',
        url: 'reactjs.org'
      }
    }
  }
];

export default Data;