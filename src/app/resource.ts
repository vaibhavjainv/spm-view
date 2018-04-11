export class Resource {
    name: String;
    location: String;
    rate: Number;
    projects: [
        {
            account: String,
            assignment: String,
            allocation: [
                {
                    week: Date,
                    hours: Number
                }
            ]
        }
    ]
  }