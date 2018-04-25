export class Assignment {
    name: String;
    account: String;
    resources: [
        {
            name: String;
            location: String;
            rate: Number;
            role: String;
            allocation: [
                {
                    week: Date,
                    hours: Number
                }
            ]
        }
    ];
    metadata:{};
    startWeek: Date;
    endWeek: Date;
}