import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) {
    throw new Error(
      'Error fetching a drink as the bar is closed sorry for the inconvenience.',
    );
  }
  return response.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink || 'Drink not found';
  const imgSrc = data?.drinks[0]?.strDrinkThumb || '/no-image.jpg';
  console.log(title, imgSrc);
  return (
    <div>
      <Link
        href='/drinks'
        className='btn btn-primary mt-8 mb-8'
      >
        Back to drinks
      </Link>
      <h1 className='text-4xl mb-8'>{title}</h1>
      <img
        src={imgSrc}
        alt={title}
      />
    </div>
  );
};

export default SingleDrinkPage;
