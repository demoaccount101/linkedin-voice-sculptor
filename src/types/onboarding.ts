export interface OnboardingData {
  postingGoals: string[];
  audience: {
    primary: string[];
    industry: string;
    seniority: string;
  };
  tone: string[];
  style: {
    length: string;
    emojis: string;
    cta: string;
  };
  avoidances: string[];
  examplePosts: string;
}

export const defaultOnboardingData: OnboardingData = {
  postingGoals: [],
  audience: {
    primary: [],
    industry: '',
    seniority: '',
  },
  tone: [],
  style: {
    length: 'medium',
    emojis: 'minimal',
    cta: 'sometimes',
  },
  avoidances: [],
  examplePosts: '',
};
