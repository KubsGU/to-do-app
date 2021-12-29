export class CreateItemDto {
    readonly Id: number;
    Name: string;
    IsChecked: boolean = false;
    Description: string;
    IsImportant: boolean = false;
}
