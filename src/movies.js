import seven from './assets/images/seven.jpg';
import creedII from './assets/images/creedII.jpg';
import inception from './assets/images/inception.jpg';
import pulpFiction from './assets/images/pulpFiction.jpg';
import sansUnBruit from './assets/images/sansUnBruit.jpg';
import goneGirl from './assets/images/goneGirl.jpg';
import lesIndestructibles2 from './assets/images/lesIndestructibles2.jpg';
import ocean8 from './assets/images/ocean8.jpg';
import midnightSun from './assets/images/midnightSun.jpg';
import lordOfWar from './assets/images/lordOfWar.jpg';

const movies = [
	{
		id: '1',
		title: 'Oceans 8',
		category: 'Comedy',
		likes: 4,
		dislikes: 1,
		img: ocean8
	},
	{
		id: '2',
		title: 'Midnight Sun',
		category: 'Comedy',
		likes: 2,
		dislikes: 0,
		img: midnightSun
	},
	{
		id: '3',
		title: 'Les indestructibles 2',
		category: 'Animation',
		likes: 3,
		dislikes: 1,
		img: lesIndestructibles2
	},
	{
		id: '4',
		title: 'Sans un bruit',
		category: 'Thriller',
		likes: 6,
		dislikes: 6,
		img: sansUnBruit
	},
	{
		id: '5',
		title: 'Creed II',
		category: 'Drame',
		likes: 16,
		dislikes: 2,
		img: creedII
	},
	{
		id: '6',
		title: 'Pulp Fiction',
		category: 'Thriller',
		likes: 11,
		dislikes: 3,
		img: pulpFiction
	},
	{
		id: '7',
		title: 'Lord of war',
		category: 'Thriller',
		likes: 12333,
		dislikes: 32,
		img: lordOfWar
	},
	{
		id: '8',
		title: 'Seven',
		category: 'Thriller',
		likes: 2,
		dislikes: 1,
		img: seven
	},
	{
		id: '9',
		title: 'Inception',
		category: 'Thriller',
		likes: 2,
		dislikes: 1,
		img: inception
	},
	{
		id: '10',
		title: 'Gone Girl',
		category: 'Thriller',
		likes: 22,
		dislikes: 12,
		img: goneGirl
	}
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
