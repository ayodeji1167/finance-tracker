export const getColor = (name: string): string => {
  switch (name?.toLowerCase()) {
    case 'pending':
    case 'created':
    case 'suspended':
      return '#F5A623';
    case 'verified':
    case 'completed':
    case 'successful':
    case 'active':
      return '#00AF94';
    case 'failed':
    case 'flagged':
      return '#D0021B';
    case 'initiated':
      return '#F5A623';
    case 'inprogress':
      return '#FFA07A';
    default:
      return 'transparent';
  }
};
export const getVerificationAccordionColor = (name: string): string => {
  switch (name?.toLowerCase()) {
    case 'pending':
    case 'created':
      return 'rgba(245, 166, 35, 0.2)';
    case 'verified':
    case 'completed':
      return 'rgba(0, 175, 148, 0.2)';
    case 'failed':
      return '#D0021B';
    case 'initiated':
      return '#F5A623';
    case 'inprogress':
      return '#FFA07A';
    default:
      return 'transparent';
  }
};

export const getStatusColor = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'active':
    case 'paid':
      return {
        bg: 'green.50',
        text: 'green.500',
      };
    case 'pending':
      return {
        bg: 'yellow.50',
        text: '#FF9D66',
      };
    case 'on leave':
      return {
        bg: 'red.50',
        text: 'red.400',
      };
    case 'onboarding':
      return {
        bg: 'yellow.50',
        text: 'yellow.400',
      };
  }
};
