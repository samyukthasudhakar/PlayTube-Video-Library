import { v4 as uuid } from "uuid";
import {
  gardening,
  healthyFood,
  meals,
  money,
  music,
  travel,
  travelJapan
} from 'assets/images'

export const videos = [
  {
    _id: uuid(),
    title: "Vegetable Garden Guide 🥕",
    thumbnail: "http://img.youtube.com/vi/1X6KvqPjk6I/0.jpg",
    creator: "Gardening 101",
    duration: "10:00",
    icon: gardening,
    category: 'Gardening',
    views: "30k",
    likes: "10k",
    src: "1X6KvqPjk6I",
    date: "31 March 2022"
  },
  {
    _id: uuid(),
    title: "A Paradise called Pollachi",
    thumbnail: "http://img.youtube.com/vi/UCEWM2Arkfg/0.jpg",
    creator: "Travel 101",
    duration: "03:15",
    icon: travelJapan,
    category: 'Travel',
    views: "30k",
    likes: "10k",
    src: "UCEWM2Arkfg",
    date: "31 March 2022"
  },
  {
    _id: uuid(),
    title: "Starting Balcony Garden",
    thumbnail: "http://img.youtube.com/vi/YF2iQAGA5Bg/0.jpg",
    creator: "Garden 101",
    duration: "12:30",
    icon: gardening,
    category: 'Gardening',
    views: "30k",
    likes: "10k",
    src: "YF2iQAGA5Bg",
    date: "31 March 2022"
  },
  {
    _id: uuid(),
    title: "5 minute meals",
    thumbnail: meals,
    creator: "Cooking 101",
    duration: "7:00",
    icon: meals,
    category: 'Food',
    views: "30k",
    likes: "10k",
    src: "UCEWM2Arkfg",
    date: "31 March 2022"
  },
  {
    _id: uuid(),
    title: "Beginners Investment Guide",
    thumbnail: money,
    creator: "Money 101",
    duration: "20:00",
    icon: money,
    category: 'Money',
    views: "30k",
    likes: "10k",
    src: "UCEWM2Arkfg",
    date: "31 March 2022"
  },
  {
    _id: uuid(),
    title: "Party Music",
    thumbnail: music,
    creator: "Music 101",
    duration: "30:00",
    icon: music,
    category: 'Music',
    views: "30k",
    likes: "10k",
    src: "UCEWM2Arkfg",
    date: "31 March 2022"
  },
  {
    _id: uuid(),
    title: "World's Beautiful Places",
    thumbnail: travel,
    creator: "Travel 101",
    duration: "15:00",
    icon: travel,
    category: 'Travel',
    views: "30k",
    likes: "10k",
    src: "UCEWM2Arkfg",
    date: "31 March 2022"
  },
  {
    _id: uuid(),
    title: "Japan Travel",
    thumbnail: travelJapan,
    creator: "Travel 101",
    duration: "10:00",
    icon: travelJapan,
    category: 'Travel',
    views: "30k",
    likes: "10k",
    src: "UCEWM2Arkfg",
    date: "31 March 2022"
  }
];
