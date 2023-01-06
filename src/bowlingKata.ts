interface frame {
  score1: number;
  score2: number;
  isStrike: boolean;
  isSpare: boolean;
}
export class BowlingKata {
  private _scoreBoard: frame[] = [];
  private _frame = 0;
  private _bowls = 0;

  roll(pins: number): void {
    if (this._bowls === 0) {
      this.initFirstFrame(pins);
    } else {
      this._scoreBoard[this._frame].score2 = pins;
      this._scoreBoard[this._frame].isSpare = this.isFrameSpare(
        this._scoreBoard[this._frame]
      );
      this._frame++;
    }
    this._bowls = (this._bowls + 1) % 2; // determines which bowl of the frame we are in
  }

  score(): number {
    for (let i = 0; i < this._scoreBoard.length; i++) {
      const frame = this._scoreBoard[i];
      if (frame.isSpare) {
        frame.score1 += this._scoreBoard[i + 1].score1;
      }
    }

    return this._scoreBoard.reduce((acc, frame) => {
      return acc + frame.score1 + frame.score2;
    }, 0);
  }

  private initFirstFrame(pins: number): void {
    this._scoreBoard.push({
      score1: pins,
      score2: 0,
      isStrike: false,
      isSpare: false,
    });
  }

  private isFrameSpare = (frame: frame): boolean => {
    return frame.score1 + frame.score2 === 10;
  };
}
