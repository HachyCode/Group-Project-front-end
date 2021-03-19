import styled from 'styled-components';

export const TopMainBody = styled.div`
    display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;

	margin: 2em 0;

	@media screen and (max-width: 900px){
		font-size: 0.8em;
	}

	@media screen and (max-width: 700px){
		font-size: 0.7em;
	}
`;

export const FilterTop = styled.div`
	background: white;
`;

export const MainInfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px 0 20px;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
`;