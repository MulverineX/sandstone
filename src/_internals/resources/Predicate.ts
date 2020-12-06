import type { PredicateType } from '@arguments'
import type { Datapack } from '@datapack'
import type { ConditionClass } from '@variables'
import { Resource } from './Resource'

export class Predicate extends Resource implements ConditionClass {
  predicateJson

  constructor(datapack: Datapack, name: string, predicate: PredicateType) {
    super(datapack, name)

    this.predicateJson = predicate

    this.commandsRoot.Datapack.addResource(name, 'predicates', { predicate })
  }

  /**
   * @internal
   */
  _toMinecraftCondition(): {value: any[]} {
    return {
      value: ['if', 'predicate', this.name],
    }
  }
}
