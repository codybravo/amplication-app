/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Lead } from "@prisma/client";

export class LeadServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LeadFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadFindManyArgs>
  ): Promise<number> {
    return this.prisma.lead.count(args);
  }

  async findMany<T extends Prisma.LeadFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadFindManyArgs>
  ): Promise<Lead[]> {
    return this.prisma.lead.findMany(args);
  }
  async findOne<T extends Prisma.LeadFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadFindUniqueArgs>
  ): Promise<Lead | null> {
    return this.prisma.lead.findUnique(args);
  }
  async create<T extends Prisma.LeadCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadCreateArgs>
  ): Promise<Lead> {
    return this.prisma.lead.create<T>(args);
  }
  async update<T extends Prisma.LeadUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadUpdateArgs>
  ): Promise<Lead> {
    return this.prisma.lead.update<T>(args);
  }
  async delete<T extends Prisma.LeadDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LeadDeleteArgs>
  ): Promise<Lead> {
    return this.prisma.lead.delete(args);
  }
}