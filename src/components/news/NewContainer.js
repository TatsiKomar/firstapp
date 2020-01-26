import React from 'react';
import NewComponent from "./NewComponent";

const getComments = (newsIndex) => {
    const arrayComments = [];
    const isEven = !(newsIndex % 2);
    for (let i = 0; i < (isEven ? 5 : 3); i++) {
        arrayComments.push({
            author: isEven ? `Ann${i}${i}${i}` : `John${i}${i}${i}`,
            commentText: `This new is ${isEven ? 'good' : 'bad'}.`,
            likes: isEven ? isEven*3 : isEven * 5
        });
    }
    return arrayComments;
};

const getNews = () => {
    const arrayNews = [];
    for (let i = 0; i < 10; i++) {
        arrayNews.push({
            title: `Title ${i}`,
            description: `${i} - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            comments: getComments(i)
        });
    }
    return arrayNews;
};

function NewContainer() {
    const currentArray = getNews();
    console.log(currentArray);
	return (
		<div className="centered new_container">
        {currentArray.map(item => (
            <NewComponent key={item.title}
                          newsInfo={item}
            />
        ))}
		</div>
	);
}

export default NewContainer;
