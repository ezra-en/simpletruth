// Redirects old QR Codes to new [lang]/[slug] internationalised URLS.

// TODO: Redirect to language-specific guide if language cached (would that need cookies?)
const redirects = {
  bible: "/en/bible",
  "great-controversy": "/en/great-controversy",
  salvation: "/en/salvation",
  law: "/en/law",
  baptism: "/en/baptism",
  sabbath: "/en/sabbath",
  antichrist: "/en/antichrist",
  "second-coming": "/en/second-coming",
  death: "/en/death",
  "pre-advent-judgment": "/en/pre-advent-judgement", // corrects spelling error
  "1000-years": "/en/1000-years",
  hell: "/en/hell",
  lifestyle: "/en/lifestyle",
  "mark-of-the-beast": "/en/mark-of-the-beast",
  usa: "/en/usa",
  "sanctuary-2": "/en/sanctuary", // sanctuary-1 was a help image
  "70-weeks": "/en/70-weeks",
  "2300-days": "/en/2300-days",
  church: "/en/church",
  prophets: "/en/prophets",
  en: "/en/",
  jp: "/jp/"
};

export function get({ params, redirect }) {
  const { id } = params;
  let link = redirects[id];

  if (!link) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  return redirect(link, 307);
}
