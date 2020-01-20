import React from 'react';

class About extends React.Component {
	render() {
		return (
			<section name="about">
				<div className="container">
					<div className="about">
						<h1>About</h1>
						<div className="about-card">
							<h2>What Is a Summer Roll?</h2>
							<p>
								Summer rolls (aka fresh spring rolls, salad
								rolls, cold rolls, rice paper rolls, Vietnamese
								spring rolls, or Gỏi cuốn) are believed to have
								origins in China, and were then introduced to
								Vietnam.
							</p>
							<p>
								Usually served as an appetizer, they are made up
								of a rice paper wrapper, a protein
								(traditionally pork or prawn), vegetables,
								herbs, and vermicelli noodles. Unlike spring
								rolls, summer rolls are not fried and are served
								at room temperature or chilled.
							</p>
						</div>
						<div className="about-card">
							<h2>What Is Mise en Place?</h2>
							<p>
								At its core, 'mise en place' is a French
								culinary phrase that translates to 'put in
								place' or 'everything in its place.'
							</p>
							<p>
								Professional chefs practice mise en place to be
								more organized and efficient in the kitchen. It
								means to be prepared: from making a list before
								shopping for ingredients, to having your
								ingredients prepped and ready to assemble the
								meal.
							</p>
							<p>
								Mise en place isn't limited to the kitchen: it
								can be used throughout your every day, no matter
								your career.{' '}
								<a
									href="https://www.npr.org/sections/thesalt/2014/08/11/338850091/for-a-more-ordered-life-organize-like-a-chef"
									target="_blank"
									rel="noopener noreferrer"
								>
									Here is an article
								</a>{' '}
								with some tips on incorporating mise en place
								into your every day life.
							</p>
						</div>
						<div className="about-card">
							<h2>And What Makes You the Expert?</h2>
							<p>
								Although I'm no professional chef, I love to
								cook and have been making summer rolls for over
								5 years. I've made them in the different
								kitchens of every place I've lived, and I've got
								my rolling technique down.
							</p>
							<p>
								Over the years, I've learned that lettuce is
								necessary to make the rolls more filling.
								Sometimes I'll use mint and cilantro, or just
								mint, or no herbs at all. Avocado and tomato are
								good additions, if you have them around and eat
								the rolls fast (i.e., there should be no
								leftovers). I've put crushed peanuts in the
								rolls, too, but it didn't do anything for me.
							</p>
							<p>
								The summer rolls I make are vegan, using tofu in
								place of traditional pork or prawn, but you can
								use the traditional proteins if you prefer. I
								always omit the vermicelli noodles, since I feel
								it’s redundant with the rice paper wrapper—also
								leaving more room for veggies.
							</p>
							<p>
								Lastly, I make a home made peanut sauce for
								dipping and have included that recipe.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
