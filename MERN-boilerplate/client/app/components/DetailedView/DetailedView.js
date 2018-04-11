import React from 'react';

const DetailedView = () => (
<div>
	<p>Detailed View Component</p>

	<div className="row">
		<div id="sidebar" className="col s3">
			<p>Sidebar</p>
		</div>

		<div id="main" className="col s9">
			<p>Main Content</p>
		</div>
	</div>
</div>

);

export default DetailedView;