import { Article } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class ArticleEntity implements Article {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty({ required: true, nullable: true })
    description: string | null;

    @ApiProperty()
    body: string;

    @ApiProperty()
    published: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}