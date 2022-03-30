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
    title: "How to Garden for Beginners",
    thumbnail: gardening,
    creator: "Gardening 101",
    duration: "10:00",
    icon: gardening,
    category: 'Gardening',
    views: "30k",
    likes: "10k"
  },
  {
    _id: uuid(),
    title: "Healthy Food Tips",
    thumbnail: healthyFood,
    creator: "Cooking 101",
    duration: "12:30",
    icon: healthyFood,
    category: 'Food',
    views: "30k",
    likes: "10k"
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
    likes: "10k"
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
    likes: "10k"
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
    likes: "10k"
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
    likes: "10k"
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
    likes: "10k"
  }
  
];
