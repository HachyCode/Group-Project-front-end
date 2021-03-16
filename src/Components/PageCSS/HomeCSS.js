import styled from 'styled-components';

export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
`;

export const TopBox = styled.div`
    border: 4px double #9D4EDD;
    border-radius: 10px;

    margin: 1em;
    padding: 0.5em 1em;

    width: 80%;
    height: auto;

    display: flex;
    justify-content: left;
    align-items: center;

	@media screen and (max-width: 700px){
		flex-direction: column;
	}
`;
export const TopBoxImage = styled.img`
    height: 6em;
    width: auto;

	@media screen and (max-width: 700px){
		margin: 1em;
	}
`;
export const TopBoxTextContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;

    padding: 2em;
    font-size: 1.5em;
`;
