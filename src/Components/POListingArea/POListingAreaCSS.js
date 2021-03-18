//bad and naughty but w/e
//I'm only doing this because there doesn't appear to be a way to dynamically pass styles
//via props, if there is let me know and I can fix this badness
import styled from 'styled-components';
import POListing from '../POListing/POListing';

export const StyledPOListing = styled(POListing)`
	margin: 1.5em 0;
`;