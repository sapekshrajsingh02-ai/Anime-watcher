type Episode = {
  number: number;
  title: string;
  video: string;
  videoType: "local" | "youtube";
};

type Anime = {
  id: number;
  title: string;
  season: number;
  image: string;
  rating: string;
  genres: string[];
  description: string;
  episodes: Episode[];
};

export const animeList: Anime[] = [
  {
    id: 1,
    title: "Attack on Titan",
    image: "/posters/attack-on-titan-s1.jpg",
    rating: "9.1",
    season: 1,
    genres: ["Action", "Drama"],
    description:
      "A bittersweet romance unfolds as two lonely souls uncover a mysterious tunnel between memory and longing.",
    episodes: [
      {
        number: 1,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/FU9-3Fmoh7w?si=XkVtruErTXAnzuoO",
        videoType: "youtube",
      },
    ],
  },
  {
    id: 2,
    title: "Attack on Titan",
    image: "/posters/attack-on-titan-s2.jpg",
    rating: "9.1",
    season: 2,
    genres: ["Action", "Drama"],
    description:
      "A bittersweet romance unfolds as two lonely souls uncover a mysterious tunnel between memory and longing.",
    episodes: [
      {
        number: 1,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/dNZV3K7orZk?si=ct52hIffoYAn6awG",
        videoType: "youtube",
      },
    ],
  },
  {
    id: 3,
    title: "Attack on Titan",
    image: "/posters/attack-on-titan-s3.jpg",
    rating: "9.1",
    season: 3,
    genres: ["Action", "Drama"],
    description:
      "A bittersweet romance unfolds as two lonely souls uncover a mysterious tunnel between memory and longing.",
    episodes: [
      {
        number: 1,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/QbaFu1hEPtU?si=7JkhSi7MOsUMIf44",
        videoType: "youtube",
      },
    ],
  },
  {
    id: 4,
    title: "Attack on Titan",
    image: "/posters/attack-on-titan-s4-p1.jpg",
    rating: "9.1",
    season: 4,
    genres: ["Action", "Drama"],
    description:
      "A bittersweet romance unfolds as two lonely souls uncover a mysterious tunnel between memory and longing.",
    episodes: [
      {
        number: 1,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/PO5OOi1kWqo?si=B5eHChE3fup4Oew2",
        videoType: "youtube",
      },
    ],
  },
  {
    id: 5,
    title: "Attack on Titan",
    image: "/posters/attack-on-titan-s4-p2.jpg",
    rating: "9.1",
    season: 4,
    genres: ["Action", "Drama"],
    description:
      "A bittersweet romance unfolds as two lonely souls uncover a mysterious tunnel between memory and longing.",
    episodes: [
      {
        number: 1,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/KCG0wBFr3z8?si=5Lc_OYzFt5a_GXYm",
        videoType: "youtube",
      },
    ],
  },
  {
    id: 6,
    title: "mushoku tensei: jobless reincarnation",
    image: "/posters/mushoku-tensei-jobless-reincarnation-s1.jpg",
    rating: "8.2",
    season: 1,
    genres: ["Action", "Adventure"],
    description:
      "An outcast gets reincarnated as Rudeus Greyrat in another world while retaining the knowledge of his past life. He vows to achieve success and enjoy fun-filled adventures in his new beginning.",
    episodes: [
      {
        number: 1,
        title: "The Day I Became a Titan",
        video: "https://www.youtube.com/watch?v=La4AoJEqVg0",
        videoType: "youtube",
      },
    ],
  },
  {
    id: 7,
    title: "mushoku tensei: jobless reincarnation",
    image: "/posters/mushoku-tensei-jobless-reincarnation-s2.jpg",
    rating: "8.2",
    season: 2,
    genres: ["Action", "Adventure"],
    description:
      "An outcast gets reincarnated as Rudeus Greyrat in another world while retaining the knowledge of his past life. He vows to achieve success and enjoy fun-filled adventures in his new beginning.",
    episodes: [
      {
        number: 1,
        title: "The Day I Became a Titan",
        video: "https://www.youtube.com/watch?v=H_NR2pDijbg",
        videoType: "youtube",
      },
    ],
  },
  {
    id: 8,
    title: "Parry everything",
    image: "/posters/parry-everything-s1.jpg",
    rating: "7.1",
    season: 1,
    genres: ["Fantasy", "Adventure"],
    description:
      "A boy who aspires to be an adventurer but lacks talent relentlessly hones his parrying skills, the lowest level of combat ability. However, his destiny changes after saving a princess from a monster.",
    episodes: [
      {
        number: 1,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/rRF5eTtC8Ow?si=5rmX3HHLD3mqAEq4",
        videoType: "youtube",
      },
    ],
  },
  {
    id: 9,
    title: "Love unseen beneath the clear night sky",
    image: "/posters/love-unseen-beneath-the-clear-night-sky.jpe",
    rating: "7.1",
    season: 1,
    genres: [ "Drama", "Tragedy", "Romance"],
    description:
      "Kakeru Sorano, a quiet university freshman who avoids others, meets Koharu Fuyutsuki, a blind girl who faces the world with quiet brightness. When she says, “I want to see fireworks someday,” something in Kakeru shifts. As they grow closer through small moments and shared loneliness, he searches for a way to make her wish come true.",
    episodes: [
      {
        number: 1,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/_x1CRDyoeS8?si=1FzsseBWdX7bDIRm",
        videoType: "youtube",
      },
        {
        number: 2,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/p7HqxwpAvj4?si=gmGhGdxMrS7bWEoO",
        videoType: "youtube",
      },
        {
        number: 3,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/MFgQXU5HLmA?si=v_e9Og4LUA4U_oJf",
        videoType: "youtube",
      },
        {
        number: 4,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/AgQkxLH3xLI?si=D_loo9c4U0blROz7",
        videoType: "youtube",
      },
        {
        number: 5,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/YQ_aNWtUCjk?si=KlU4vKZxBKTxwEjb",
        videoType: "youtube",
      },
        {
        number: 6,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/XRdBP2T1Ieg?si=LUf40BKGEmbGb9dR",
        videoType: "youtube",
      },
        {
        number: 7,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/a-TtuS6hfTk?si=5jc8p4b_VggcI7pt",
        videoType: "youtube",
      },
        {
        number: 8,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/3n-Q8Ohcxuw?si=cB0X6IVWxMbLRCA4",
        videoType: "youtube",
      },
        {
        number: 9,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/pR4Q45sxYh8?si=Tw-RQo_UGEc8h9Re",
        videoType: "youtube",
      },
        {
        number: 10,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/FARzdedHbEI?si=7tsHezoH0W0CWrHz",
        videoType: "youtube",
      },
        {
        number: 11,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/qugV87opPY8?si=Es-_OJVNG19YIH9t",
        videoType: "youtube",
      },
        {
        number: 12,
        title: "The Day I Became a Titan",
        video: "https://youtu.be/M9mNUCJa0js?si=BOu82QtLsch7Ixuu",
        videoType: "youtube",
      },
    ],
  },
];
