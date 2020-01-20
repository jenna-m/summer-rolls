import React from 'react';
import GifPlayer from 'react-gif-player';
// Import images
import carrots from '../images/carrots.gif';
import cucumber from '../images/cucumber.gif';
import herbs from '../images/herbs.gif';
import lettuce from '../images/lettuce.gif';
import peppers from '../images/peppers.gif';
import platter from '../images/platter.gif';
import rolls from '../images/rolls.gif';
import sauce from '../images/sauce.gif';
import tofuCut from '../images/tofuCut.gif';
import tofuPress from '../images/tofuPress.gif';
import workStation from '../images/workStation.jpg';

class Process extends React.Component {
	render() {
		return (
			<section name="process">
				<div className="container">
					<div className="process">
						<h1>The Process</h1>
						<div className="process-list">
							<div className="process-card">
								<div className="process-text">
									<h2>Step 1: Prep the Tofu</h2>
									<p>
										Open the tofu packages, and drain the
										water. Place a clean dishtowel on a
										clean surface, and set both blocks of
										tofu side-by-side on the towel. Wrap the
										blocks of tofu in the towel, making sure
										to create a flat and stable surface.
										Place something heavy on top to weight
										down the tofu (i.e., a cast iron pan or
										a cutting board and some heavy books).
									</p>
									<p>
										Allow the tofu drain while you prepare
										the vegetables.
									</p>
									<span>
										Note: if the tofu is sitting in excess
										water, be sure to drain it off.
									</span>
								</div>
								<div className="process-image">
									<GifPlayer
										gif={tofuPress}
										alt="Tofu being pressed"
									/>
								</div>
							</div>

							<div className="process-card">
								<div className="process-text">
									<h2>Step 2a: Cut the Peppers</h2>
									<p>
										Wash the peppers and slice them in half
										from bottom to top. Remove any seeds and
										parts you wouldn’t eat, then{' '}
										<a
											href="https://www.youtube.com/watch?v=hZGqtmwboHU"
											target="_blank"
											rel="noopener noreferrer"
										>
											slice into thin strips
										</a>{' '}
										with a sharp knife. If the peppers are
										too thick, they will puncture the rice
										paper wrappers, so be sure to make
										consistently thin slices.
									</p>
									<p>
										Place the sliced peppers in your
										‘prepped veggie’ bowl, pushed to one
										side.
									</p>
								</div>
								<div className="process-image">
									<GifPlayer
										gif={peppers}
										alt="Peppers being sliced"
									/>
								</div>
							</div>
							<div className="process-card">
								<div className="process-text">
									<h2>Step 2b: Cut the Carrots</h2>
									<p>
										Peel, rinse, and cut the ends off the
										carrots. Because I use a{' '}
										<a
											href="https://www.amazon.com/UberChef-Stainless-Julienne-Vegetable-UC-JP101/dp/B00KEVG4L4/ref=pd_sbs_79_t_0/146-2298843-8387315?_encoding=UTF8&pd_rd_i=B00KEVG4L4&pd_rd_r=28522793-e688-4513-98c6-04fc039f899e&pd_rd_w=AMKLx&pd_rd_wg=OSJdA&pf_rd_p=5cfcfe89-300f-47d2-b1ad-a4e27203a02a&pf_rd_r=DGAAPREA8CNVKDMHZZQH&psc=1&refRID=DGAAPREA8CNVKDMHZZQH"
											target="_blank"
											rel="noopener noreferrer"
										>
											Julienne peeler
										</a>
										, my carrots are consistent and don’t
										puncture the rice paper wrapper. If you
										don’t have a Julienne peeler, you can
										either peel the carrots to make{' '}
										<a
											href="https://www.youtube.com/watch?v=KtpGBC3fOQg"
											target="_blank"
											rel="noopener noreferrer"
										>
											ribbons
										</a>{' '}
										or Julienne them{' '}
										<a
											href="https://www.youtube.com/watch?v=E1F0OQhJTNY"
											target="_blank"
											rel="noopener noreferrer"
										>
											using a knife
										</a>
										.
									</p>
									<p>
										When finished, place the prepared carrot
										in your ‘prepped veggie’ bowl, butted up
										against the pepper slices.
									</p>
								</div>
								<div className="process-image">
									<GifPlayer
										gif={carrots}
										alt="Carrots being julienned"
									/>
								</div>
							</div>
							<div className="process-card">
								<div className="process-text">
									<h2>Step 2c: Cut the Cucumber</h2>
									<p>
										Wash the cucumber and cut off the ends.
										I use the Julienne peeler on the
										cucumber, leaving the skin in tact.
										Again, if you don't have a Julienne
										peeler, you can{' '}
										<a
											href="https://www.youtube.com/watch?v=KtpGBC3fOQg"
											target="_blank"
											rel="noopener noreferrer"
										>
											ribbon
										</a>{' '}
										the cucumber, or you can Julienne the
										cucumber{' '}
										<a
											href="https://www.youtube.com/watch?v=E1F0OQhJTNY"
											target="_blank"
											rel="noopener noreferrer"
										>
											with a knife
										</a>
										.
									</p>
									<p>
										When finished, place the prepared
										cucumber in your ‘prepped veggie’ bowl,
										butted up against the carrot pile.
									</p>
									<p>
										Your ‘prepped veggie’ bowl should now be
										full.
									</p>
								</div>
								<div className="process-image">
									<GifPlayer
										gif={cucumber}
										alt="Cucumber being julienned"
									/>
								</div>
							</div>

							<div className="process-card">
								<div className="process-text">
									<h2>Step 2d: Cut the Herbs</h2>
									<p>
										Remove the mint leaves from their
										thicker stems. Rinse the herbs, and pat
										dry with a paper towel. Chop each of the
										herb bunches, and place each of them
										into their own small bowl.
									</p>
								</div>
								<div className="process-image">
									<GifPlayer
										gif={herbs}
										alt="Mint and Cilantro being cut"
									/>
								</div>
							</div>

							<div className="process-card">
								<div className="process-text">
									<h2>Step 2e: Cut the Tofu</h2>
									<p>
										The tofu should be thoroughly drained by
										now.
									</p>
									<p>
										Unwrap the tofu, slice the block in
										half, flip the blocks to stand upright,
										then slice each half so you have 3
										equally sized slabs. Flip the tofu back
										on its side, and slice to make 4 equally
										spaced pieces. Place the tofu slices on
										a plate. I like to keep this plate to
										the top right of my cutting board and
										prepped vegetable setup.
									</p>
									<p>
										You should get 24 strips of tofu from
										each block, for a total of 48 tofu
										strips. This is how I estimate how many
										rolls can be made.
									</p>
								</div>
								<div className="process-image">
									<GifPlayer
										gif={tofuCut}
										alt="Tofu being cut"
									/>
								</div>
							</div>

							<div className="process-card">
								<div className="process-text">
									<h2>Step 2f: Cut the Lettuce</h2>
									<p>
										Since I usually wash my lettuce after
										chopping it, I save it for the last
										vegetable to prep. Chop your lettuce as
										thinly as you can. Clean the lettuce
										however you’d like, and throw it in a
										salad spinner or dry with a clean towel.
										Place in its own bowl.
									</p>
									<p>
										Be sure to clean your cutting board
										after prepping the lettuce, so you can
										assemble the rolls on a clean surface.
									</p>
									<span>
										Note: when assembling the rolls, be sure
										to pick out the chunkier/thicker pieces
										of lettuce, since those are the ones
										that can puncture the rice paper
										wrapper.
									</span>
								</div>
								<div className="process-image">
									<GifPlayer
										gif={lettuce}
										alt="Lettuce being shredded"
									/>
								</div>
							</div>

							<div className="process-card">
								<div className="process-text">
									<h2>Step 3: Make the Peanut Sauce</h2>
									<p>
										This sauce is easy to make, and can be
										adjusted to the
										saltiness/sweetness/tartness/spiciness
										of your liking.
									</p>
									<p>
										To recap, this is what you'll need:
										<ul>
											<li>
												1x 1lb. Natural Peanut Butter,
												no salt or sugar added
											</li>
											<li>
												2-4 tablespoons Soy Sauce or
												Tamari
											</li>
											<li>2-3 tablespoons Lime Juice</li>
											<li>Sriracha, to taste</li>
											<li>~1 tablespoon Garlic Powder</li>
											<li>
												Agave or Maple Syrup, to taste
											</li>
											<li>~1 cup Water</li>
										</ul>
									</p>
									<p>
										Make sure the peanut butter is
										thoroughly stirred, and dump the entire
										jar of peanut butter into a medium sized
										bowl. This does make a lot of sauce—if
										you have leftovers, it’s great for
										dipping cut up veggies.
									</p>
									<p>
										Add the soy sauce/tamari and fresh lime
										juice, starting out with smaller
										amounts. Add the Sriracha, garlic
										powder, and agave/maple syrup. Again,
										start off with smaller amounts—you can
										always adjust.
									</p>
									<p>
										Whisk with a fork. When well mixed,
										slowly add some water (start with 1/2
										cup). Keep whisking, and gradually add
										more water until your sauce is your
										desired consistency. Taste and make
										adjustments until you’re satisfied.
									</p>
								</div>
								<div className="process-image">
									<GifPlayer
										gif={sauce}
										alt="Peanut Sauce being made"
									/>
								</div>
							</div>

							<div className="process-card">
								<div className="process-text">
									<h2>Step 4: Mise en Place</h2>
									<p>
										With the tofu pressed, vegetables cut,
										and sauce made, we can set up our work
										station.
									</p>
									<p>
										My usual setup is pictured to the left.
									</p>
									<p>
										Have a stack of rice paper wrapper
										packages (#1) to the right of where your
										cutting board and prepped vegetables
										will be setup. I like to have more
										packages out than I need, since I don’t
										want to be fumbling around the kitchen
										for another package when I run out. If
										you have a leftover package, you can
										store it in a gallon sized ziploc bag.
									</p>
									<p>
										Have a bowl of warm water (#2) ready for
										softening the rice paper wrappers. I
										usually fill the bowl with half
										lukewarm, half near-boiling water, and
										let it cool for a minute to get to the
										right temperature. If the water is too
										hot to touch, give it a little more
										time. I keep this bowl between the
										cutting board and rice paper wrapper
										pile for the best workflow.
									</p>
									<p>
										Make sure your work surface is clean. I
										like to set my cutting board (#4) in
										front of me, with the dish that holds
										the pepper, carrot, and cucumber above
										that, a bowl that holds the lettuce to
										the left of that, and small bowls for
										the herbs to the left of the lettuce
										bowl (#5). The plate of cut tofu (#3)
										sits to the right of the vegetables and
										above the bowl of warm water.
									</p>
									<p>
										Lastly, a serving platter (#6) for the
										finished rolls goes to the left of all
										of this, allowing me to work from right
										to left.
									</p>
								</div>
								<div className="process-image">
									<img
										src={workStation}
										alt="Kitchen with ingredients and tools set up"
									/>
								</div>
							</div>

							<div className="process-card">
								<div className="process-text">
									<h2>Step 5: Start Rolling</h2>
									<p>
										Lightly dampen your cutting board
										surface, so the rice paper wrapper
										doesn’t stick. Open a pack of rice paper
										wrappers, grab one, and place it in the
										container of warm water for a few
										seconds—usually 3-5 seconds, depending
										on how hot your water is. Take the
										wrapper out of the water, and place it
										on your work surface.
									</p>
									<p>
										Grab a strip of tofu and place it on the
										rice paper wrapper, about a third of the
										way down. Grab one or two slices of bell
										pepper, and place them on top of the
										tofu. Grab a small amount of carrot, and
										place that on top of the existing pile.
										Repeat the process with the cucumber and
										lettuce, followed by a pinch of herbs.
									</p>
									<span>
										Note: It’s okay if you run out of mint,
										or if your rolls have different amounts
										of each vegetable in them. Just be sure
										to have plenty of bell pepper, carrot,
										cucumber, and lettuce to accommodate the
										amount of tofu.
									</span>
									<p>
										Pull up the bottom of the rice paper
										wrapper to cover the tofu and
										vegetables. Roll up slightly, ensuring
										the filling is tucked inside. Grab the
										left side of the wrapper, and pull it
										over; do the same with the right side.
										Now roll it up as neatly as you can. If
										the rice paper starts to stick to the
										work surface as you're rolling, wet your
										fingers and dampen the space between the
										work surface and the roll. It should
										become unstuck.
									</p>
									<p>
										You should taste the first roll to see
										if you're happy with the quantities of
										each ingredient.
									</p>
									<p>
										When you’re finished with a roll, place
										it on the side of your work surface to
										dry for a minute, then place it on your
										serving platter. Be sure to not
										overcrowd the platter or double-stack
										rolls, since they might fuse together
										and rip when you try to take them apart
										later. Some rolls might split open from
										being over-stuffed, and that's okay—just
										fill them a little less as you go.
									</p>
									<span>
										Note: When you are nearing the 10th roll
										(and 20th… and 30th, etc.), you might
										notice that the wrapper needs to sit in
										the water for a few more seconds to
										become pliable. This is usually when I
										change my water and re-dampen the
										cutting board.
									</span>
								</div>
								<div className="process-image">
									<GifPlayer
										gif={rolls}
										alt="Summer rolls being rolled"
									/>
								</div>
							</div>

							<div className="process-card">
								<div className="process-text">
									<h2>Conclusion / Leftovers</h2>
									<p>
										The leftover rolls can be stored in the
										fridge on the serving platter(s) and
										wrapped in plastic wrap. Alternatively,
										they can be{' '}
										<a
											href="https://www.thekitchn.com/the-best-way-to-keep-summer-rolls-fresh-store-prepared-summer-rolls-246276"
											target="_blank"
											rel="noopener noreferrer"
										>
											wrapped individually, tightly in
											plastic wrap
										</a>
										, and stored in an airtight container in
										the fridge. I feel guilty using this
										method of storage (all that plastic
										wrap!), but they don't dry out as
										quickly.
									</p>
									<p>
										The rolls are best eaten the same day,
										but can keep for 2-3 days from my
										experience.
									</p>
									<p>
										Remove the rolls from the fridge about
										20-30 minutes before serving to bring
										them to room temperature.
									</p>
									<p>
										Any leftover peanut sauce should be
										refrigerated in a lidded container and
										will keep for about 4 days.
									</p>
									<p>
										If you made way too much peanut sauce,
										you can freeze and thaw the sauce in the
										fridge the night before you plan to eat
										it. Before freezing, place a layer of
										plastic wrap over the sauce, and then
										cover with the lid to prevent freezer
										burn (
										<a
											href="https://www.tasteofhome.com/article/freezing-soup/"
											target="_blank"
											rel="noopener noreferrer"
										>
											see step 4
										</a>
										).
									</p>
									<p>Enjoy!</p>
								</div>
								<div className="process-image">
									<GifPlayer
										gif={platter}
										alt="Summer Rolls being laid out on a serving platter"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Process;
