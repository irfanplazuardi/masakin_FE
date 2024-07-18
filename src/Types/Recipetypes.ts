export interface RecipeTypes {
    id:              number;
    user_id:         string;
    title:           string;
    image_url:       string;
    video_url:       null;
    description:     string;
    difficulty:      number;
    time_estimation: number;
    recipe_rating:   string;
    created_at:      Date;
    updated_at:      Date;
    ingredients:     Ingredient[];
    equipments:      Equipment[];
    categories:      Category[];
    instructions:    Instruction[];
}

export interface Category {
    category_id: number;
    name:        string;
}

export interface Equipment {
    equipment_id: number;
    name:         string;
    image_url:    null;
    description:  null;
}

export interface Ingredient {
    id:               number;
    quantity:         number;
    measurement_unit: string;
    name:             string;
    image_url:        null;
    description:      null;
}

export interface Instruction {
    instruction_id: number;
    step_number:    number;
    description:    string;
    image_url_1:    null;
    image_url_2:    null;
}
