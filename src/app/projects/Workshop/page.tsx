// Ensure the file is in the correct directory: /app/projects/CloudTileset/page.js
import Header from "@/app/components/Header"; // Make sure Header component exists at this path
import "../../../../styles/project.css";
export default function Project() {
  return (
    <div id="Project">
      <Header HImage="/img/workshopheader.png" Heading="Workshop Database!" />

      <p>
        One of the Labs for my Computer Sciences Portal involved making a
        database in Airtable, and publishing the forms that allow data to be
        added to the database from an external source. I thought this project
        was cool, so I posted it here! As A Bonus, you can fill out the form and
        mark your data not only in the database, but on the site! This work is
        entirely fictional, and nothing is done with this data, so feel free to
        get creative! For the enjoyment of all users, please do not post
        anything innapropiate. Doing so will tarnish user experience and may
        lead to the removal of this cool project!
      </p>
      <div className="secondary">
        <iframe src="https://airtable.com/embed/app93vkhmr7a7NBX6/shrgOh1g7l3TFTpmH"></iframe>

        <iframe src="https://airtable.com/embed/app93vkhmr7a7NBX6/shrpaUUhOUNftOKyd?viewControls=on"></iframe>

        <iframe src="https://airtable.com/embed/app93vkhmr7a7NBX6/shrqi4ZCImgrLzfr5"></iframe>

        <iframe src="https://airtable.com/embed/app93vkhmr7a7NBX6/shrZ4ZLubZJC0u1ye?viewControls=on"></iframe>

        <iframe src="https://airtable.com/embed/app93vkhmr7a7NBX6/shraPVTZqd1a5Dzso"></iframe>
      </div>
    </div>
  );
}
