import React from 'react';

class Tools extends React.Component {
	render() {
		return (
			<section name="tools">
				<div className="container">
					<div className="tools">
						<h1>The Tools</h1>
						<div className="tools-list">
							<div className="tools-card">
								<h2>Kitchen Equipment</h2>
								<ul>
									<li>Cutting Boards</li>
									<li>Large and Small Kitchen Knife</li>
									<li>
										Bowls or Plates, for holding prepped
										ingredients
									</li>
									<li>
										Vegetable Peeler, preferrably a{' '}
										<a
											href="https://www.amazon.com/UberChef-Stainless-Julienne-Vegetable-UC-JP101/dp/B00KEVG4L4/ref=pd_sbs_79_t_0/146-2298843-8387315?_encoding=UTF8&pd_rd_i=B00KEVG4L4&pd_rd_r=28522793-e688-4513-98c6-04fc039f899e&pd_rd_w=AMKLx&pd_rd_wg=OSJdA&pf_rd_p=5cfcfe89-300f-47d2-b1ad-a4e27203a02a&pf_rd_r=DGAAPREA8CNVKDMHZZQH&psc=1&refRID=DGAAPREA8CNVKDMHZZQH"
											target="_blank"
											rel="noopener noreferrer"
										>
											Julienne peeler
										</a>
									</li>
									<li>
										Serving Platter(s), for the finished
										rolls
									</li>
								</ul>
							</div>
							<div className="tools-card">
								<h2>For the Rolls</h2>
								<ul>
									<li>~3x Packs of Rice Paper Wrappers</li>
									<li>2lbs. of Firm/Extra Firm Tofu</li>
									<li>2x Bell Peppers</li>
									<li>4x Carrots</li>
									<li>2x Cucumbers</li>
									<li>Fresh Herbs, I used mint & cilantro</li>
									<li>1/2 Head of Lettuce of your choice</li>
								</ul>
							</div>
							<div className="tools-card">
								<h2>For the Sauce</h2>
								<ul>
									<li>
										1x 1lb. Natural Peanut Butter, no salt
										or sugar added
									</li>
									<li>2-4 tablespoons Soy Sauce or Tamari</li>
									<li>2-3 tablespoons Lime Juice</li>
									<li>Sriracha, to taste</li>
									<li>~1 tablespoon Garlic Powder</li>
									<li>Agave or Maple Syrup, to taste</li>
									<li>~1 cup Water</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Tools;
