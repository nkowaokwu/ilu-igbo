// mock proverbs for testing
const proverbs = [
  {
    id: 1,
    text: "Onye kworo ihe oke na eme, o suo ulo oku",
    literalTranslation:
      "If one starts thinking about the atrocities of the rat, he would be tempted to burn down his own house",
    meaning: "Do not take things to heart",
    likes: 3,
    audioUrl: "",
    comments: [],
  },
  {
    id: 2,
    text:
      "Agaghi m agwa agadi nwanyi zie imi makana obughim ga ata isi ya ma o nwuo?",
    literalTranslation:
      "I am not going to tell the old woman to blow her nose, would I have to eat her head when she dies?",
    meaning: "Do not interfere in people's private lives",
    likes: 0,
    audioUrl: "",
    comments: [],
  },
  {
    id: 3,
    text: "Nkita siri kama ino nkiti ya arachawa mkpuru amu ya",
    literalTranslation:
      "The dog said that instead sitting idly it would rather keep busy by licking its balls",
    meaning:
      "I am doing a low impact activity for want of something better to do",
    likes: 13,
    audioUrl: "",
    comments: [],
  },
  {
    id: 4,
    text: "Anu ji eze ari elu maara osisi na eli ilu",
    literalTranslation:
      "The animal which climbs a tree using its teeth knows which trees are bitter",
    meaning: "Practice makes a genius",
    likes: 9,
    audioUrl: "",
    comments: [],
  },
  {
    id: 5,
    text: "",
    literalTranslation: "",
    likes: 313,
    audioUrl: "",
    comments: [],
  },
  {
    id: 6,
    text: "",
    literalTranslation: "",
    likes: 3,
    audioUrl: "",
    comments: [],
  },
];

function fetchProverbs() {
  //   return fetch(API_URL).then((res) => res.json());
  return Promise.resolve(proverbs);
}

const api = { fetchProverbs };

export default api;
