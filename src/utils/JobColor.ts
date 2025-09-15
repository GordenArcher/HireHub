
export const GetJobTypeColor = (type: string) => {
    switch (type) {
    case 'FULL-TIME':
        return 'bg-green-100 text-green-700';
    case 'PART-TIME':
        return 'bg-orange-100 text-orange-700';
    case 'INTERNSHIP':
        return 'bg-blue-100 text-blue-700';
    default:
        return 'bg-gray-100 text-gray-700';
    }
};

