export interface QuipsResponse {
  quips: { id: number; promptId: number; quipText: string; score: number }[];
}
