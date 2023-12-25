export const inputFields = {
  main: [
    { name: 'Name', typeInput: 'text' },
    { name: 'E-mail', typeInput: 'email' },
    { name: 'Password', typeInput: 'password' },
  ],

  parameters: [
    { name: 'height', typeInput: 'number' },
    { name: 'weight', typeInput: 'number' },
  ],

  age: [{ name: 'age', typeInput: 'number' }],
};

export const radioData = {
  goal: ['Lose fat', 'Maintain', 'Gain Muscle'],
  gender: ['Male', 'Female'],
  activity: [
    '1.2 - If you do not have physical activity and sedentary work',
    '1.375 - If you do short runs or light gymnastics 1-3 times a week',
    '1.55 - If you play sports with average loads 3-5 times a week',
    '1.725 - If you train fully 6-7 times a week',
    '1.9 - If your work is related to physical labor, you train 2 times a day and include strength exercises in your training program',
  ],
};
