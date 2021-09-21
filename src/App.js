import logo from './logo.svg';
import './App.css';
import {Box, Typography} from '@mui/material'
import Item from './Item'
import Card from './Card'

function App() {
  const items = [
    {
      title: "The TLD" ,
      description: "Does the domain extention math the language of the domain name?" ,
      image: 'Untitled1.png'
    },
    {
      title: "Domain Length",
      description: "Is the domain short enough to rememer?",
      image: 'Untitled1.png'
    },
    {
      title: "Language",
      description: "How complex is the actual domain name?",
      image: 'Untitled1.png'
    },
    {
      title: "International recognition",
      description: "Can the domain name be used on an international scale?",
      image: 'Untitled1.png'
    },
    {
      title: "Search the engine",
      description: "Does the domain follow search engine guidelines?",
      image: 'Untitled1.png'
    },
    {
      title: "Adverting Potential",
      description: "Could the domain be used for adverting campains?",
      image: 'Untitled1.png'
    },
    {
      title: "Scale Opportunities",
      description: "Can the domain name be used on an international scale?",
      image: 'Untitled1.png'
    },
    {
      title: "Typo susceptibility",
      description: "How high is the risk of mistyping the domain name?",
      image: 'Untitled1.png'
    },
    {
      title: "Business potential",
      description: "Can the domain be used as your company address?",
      image: 'Untitled1.png'
    }
  ]

  const cardItems = [
    {
      version: '3.3.0 (14/05/2018)',
      status: 'New',
      image: 'img_avatar3.png',
      name: 'Kevin Joe',
      description: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization'
    },
    {
      version: '3.1.0 (20/05/2015)',
      status: 'Fix',
      image: 'img_avatar3.png',
      name: 'Kevin Joe',
      description: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization'
    },
    {
      version: '3.13.0 (20/05/2015)',
      status: 'Improvement',
      image: 'img_avatar3.png',
      name: 'Kevin Joe',
      description: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization'
    },
    {
      version: '3.3.0 (14/05/2018)',
      status: 'New',
      image: 'img_avatar3.png',
      name: 'Kevin Joe',
      description: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization'
    },
    {
      version: '3.1.0 (20/05/2015)',
      status: 'Fix',
      image: 'img_avatar3.png',
      name: 'Kevin Joe',
      description: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization'
    },
    {
      version: '3.13.0 (20/05/2015)',
      status: 'Improvement',
      image: 'img_avatar3.png',
      name: 'Kevin Joe',
      description: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization'
    },
    {
      version: '3.3.0 (14/05/2018)',
      status: 'New',
      image: 'img_avatar3.png',
      name: 'Kevin Joe',
      description: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization'
    },
    {
      version: '3.1.0 (20/05/2015)',
      status: 'Fix',
      image: 'img_avatar3.png',
      name: 'Kevin Joe',
      description: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization'
    },
    {
      version: '3.13.0 (20/05/2015)',
      status: 'Improvement',
      image: 'img_avatar3.png',
      name: 'Kevin Joe',
      description: 'File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization'
    }

  ]

  return (
    <Box clss='box'>
    {items.map(item => (
      <Item 
      title={item.title}
      description={item.description}
      image={item.image} />
      ))}
      {cardItems.map(card => (
        <Card 
          version={card.version}
          status={card.status}
          image={card.image}
          name={card.name}
          description={card.description}
        />
      ))}
    </Box>
  );
}

export default App;
