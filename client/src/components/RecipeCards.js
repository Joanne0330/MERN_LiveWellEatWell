import React from 'react'

export const RecipeCards = (item) => {
    console.log(item)

    return (
        <div>
            <ul>
                <li>
                {item.item.recipe.label}

                </li>
            </ul>
        </div>
    )
}

export default RecipeCards;
