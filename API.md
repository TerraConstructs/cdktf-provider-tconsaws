# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Signal <a name="Signal" id="@tcons/provider-tconsaws.signal.Signal"></a>

Represents a {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal tconsaws_signal}.

#### Initializers <a name="Initializers" id="@tcons/provider-tconsaws.signal.Signal.Initializer"></a>

```typescript
import { signal } from '@tcons/provider-tconsaws'

new signal.Signal(scope: Construct, id: string, config: SignalConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.Initializer.parameter.config">config</a></code> | <code>@tcons/provider-tconsaws.signal.SignalConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@tcons/provider-tconsaws.signal.Signal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@tcons/provider-tconsaws.signal.Signal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@tcons/provider-tconsaws.signal.Signal.Initializer.parameter.config"></a>

- *Type:* @tcons/provider-tconsaws.signal.SignalConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.resetPublishTimeout">resetPublishTimeout</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@tcons/provider-tconsaws.signal.Signal.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@tcons/provider-tconsaws.signal.Signal.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@tcons/provider-tconsaws.signal.Signal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@tcons/provider-tconsaws.signal.Signal.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@tcons/provider-tconsaws.signal.Signal.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@tcons/provider-tconsaws.signal.Signal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@tcons/provider-tconsaws.signal.Signal.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@tcons/provider-tconsaws.signal.Signal.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@tcons/provider-tconsaws.signal.Signal.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@tcons/provider-tconsaws.signal.Signal.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@tcons/provider-tconsaws.signal.Signal.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@tcons/provider-tconsaws.signal.Signal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@tcons/provider-tconsaws.signal.Signal.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.Signal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@tcons/provider-tconsaws.signal.Signal.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.Signal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@tcons/provider-tconsaws.signal.Signal.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.Signal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@tcons/provider-tconsaws.signal.Signal.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.Signal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@tcons/provider-tconsaws.signal.Signal.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.Signal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@tcons/provider-tconsaws.signal.Signal.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.Signal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@tcons/provider-tconsaws.signal.Signal.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.Signal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@tcons/provider-tconsaws.signal.Signal.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.Signal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@tcons/provider-tconsaws.signal.Signal.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.Signal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@tcons/provider-tconsaws.signal.Signal.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@tcons/provider-tconsaws.signal.Signal.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@tcons/provider-tconsaws.signal.Signal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@tcons/provider-tconsaws.signal.Signal.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@tcons/provider-tconsaws.signal.Signal.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.Signal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@tcons/provider-tconsaws.signal.Signal.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@tcons/provider-tconsaws.signal.Signal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@tcons/provider-tconsaws.signal.Signal.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@tcons/provider-tconsaws.signal.Signal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@tcons/provider-tconsaws.signal.Signal.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@tcons/provider-tconsaws.signal.Signal.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@tcons/provider-tconsaws.signal.Signal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@tcons/provider-tconsaws.signal.Signal.putTimeouts"></a>

```typescript
public putTimeouts(value: SignalTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@tcons/provider-tconsaws.signal.Signal.putTimeouts.parameter.value"></a>

- *Type:* @tcons/provider-tconsaws.signal.SignalTimeouts

---

##### `resetPublishTimeout` <a name="resetPublishTimeout" id="@tcons/provider-tconsaws.signal.Signal.resetPublishTimeout"></a>

```typescript
public resetPublishTimeout(): void
```

##### `resetRetries` <a name="resetRetries" id="@tcons/provider-tconsaws.signal.Signal.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@tcons/provider-tconsaws.signal.Signal.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@tcons/provider-tconsaws.signal.Signal.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Signal resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@tcons/provider-tconsaws.signal.Signal.isConstruct"></a>

```typescript
import { signal } from '@tcons/provider-tconsaws'

signal.Signal.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@tcons/provider-tconsaws.signal.Signal.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@tcons/provider-tconsaws.signal.Signal.isTerraformElement"></a>

```typescript
import { signal } from '@tcons/provider-tconsaws'

signal.Signal.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@tcons/provider-tconsaws.signal.Signal.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@tcons/provider-tconsaws.signal.Signal.isTerraformResource"></a>

```typescript
import { signal } from '@tcons/provider-tconsaws'

signal.Signal.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@tcons/provider-tconsaws.signal.Signal.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@tcons/provider-tconsaws.signal.Signal.generateConfigForImport"></a>

```typescript
import { signal } from '@tcons/provider-tconsaws'

signal.Signal.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Signal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@tcons/provider-tconsaws.signal.Signal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@tcons/provider-tconsaws.signal.Signal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Signal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@tcons/provider-tconsaws.signal.Signal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Signal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@tcons/provider-tconsaws.signal.Signal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Signal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.failureReceived">failureReceived</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.instanceIds">instanceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.successCount">successCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.timeouts">timeouts</a></code> | <code>@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.expectedCountInput">expectedCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.publishTimeoutInput">publishTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.signalIdInput">signalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.timeoutsInput">timeoutsInput</a></code> | <code>@tcons/provider-tconsaws.signal.SignalTimeouts \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.triggersInput">triggersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.expectedCount">expectedCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.publishTimeout">publishTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.signalId">signalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@tcons/provider-tconsaws.signal.Signal.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@tcons/provider-tconsaws.signal.Signal.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@tcons/provider-tconsaws.signal.Signal.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@tcons/provider-tconsaws.signal.Signal.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@tcons/provider-tconsaws.signal.Signal.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@tcons/provider-tconsaws.signal.Signal.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@tcons/provider-tconsaws.signal.Signal.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@tcons/provider-tconsaws.signal.Signal.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@tcons/provider-tconsaws.signal.Signal.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@tcons/provider-tconsaws.signal.Signal.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@tcons/provider-tconsaws.signal.Signal.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@tcons/provider-tconsaws.signal.Signal.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@tcons/provider-tconsaws.signal.Signal.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@tcons/provider-tconsaws.signal.Signal.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `failureReceived`<sup>Required</sup> <a name="failureReceived" id="@tcons/provider-tconsaws.signal.Signal.property.failureReceived"></a>

```typescript
public readonly failureReceived: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@tcons/provider-tconsaws.signal.Signal.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceIds`<sup>Required</sup> <a name="instanceIds" id="@tcons/provider-tconsaws.signal.Signal.property.instanceIds"></a>

```typescript
public readonly instanceIds: string[];
```

- *Type:* string[]

---

##### `successCount`<sup>Required</sup> <a name="successCount" id="@tcons/provider-tconsaws.signal.Signal.property.successCount"></a>

```typescript
public readonly successCount: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@tcons/provider-tconsaws.signal.Signal.property.timeouts"></a>

```typescript
public readonly timeouts: SignalTimeoutsOutputReference;
```

- *Type:* @tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference

---

##### `expectedCountInput`<sup>Optional</sup> <a name="expectedCountInput" id="@tcons/provider-tconsaws.signal.Signal.property.expectedCountInput"></a>

```typescript
public readonly expectedCountInput: number;
```

- *Type:* number

---

##### `publishTimeoutInput`<sup>Optional</sup> <a name="publishTimeoutInput" id="@tcons/provider-tconsaws.signal.Signal.property.publishTimeoutInput"></a>

```typescript
public readonly publishTimeoutInput: string;
```

- *Type:* string

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@tcons/provider-tconsaws.signal.Signal.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@tcons/provider-tconsaws.signal.Signal.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `signalIdInput`<sup>Optional</sup> <a name="signalIdInput" id="@tcons/provider-tconsaws.signal.Signal.property.signalIdInput"></a>

```typescript
public readonly signalIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@tcons/provider-tconsaws.signal.Signal.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SignalTimeouts | IResolvable;
```

- *Type:* @tcons/provider-tconsaws.signal.SignalTimeouts | cdktf.IResolvable

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@tcons/provider-tconsaws.signal.Signal.property.triggersInput"></a>

```typescript
public readonly triggersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `expectedCount`<sup>Required</sup> <a name="expectedCount" id="@tcons/provider-tconsaws.signal.Signal.property.expectedCount"></a>

```typescript
public readonly expectedCount: number;
```

- *Type:* number

---

##### `publishTimeout`<sup>Required</sup> <a name="publishTimeout" id="@tcons/provider-tconsaws.signal.Signal.property.publishTimeout"></a>

```typescript
public readonly publishTimeout: string;
```

- *Type:* string

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@tcons/provider-tconsaws.signal.Signal.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="@tcons/provider-tconsaws.signal.Signal.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `signalId`<sup>Required</sup> <a name="signalId" id="@tcons/provider-tconsaws.signal.Signal.property.signalId"></a>

```typescript
public readonly signalId: string;
```

- *Type:* string

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@tcons/provider-tconsaws.signal.Signal.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.signal.Signal.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@tcons/provider-tconsaws.signal.Signal.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### TconsawsProvider <a name="TconsawsProvider" id="@tcons/provider-tconsaws.provider.TconsawsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs tconsaws}.

#### Initializers <a name="Initializers" id="@tcons/provider-tconsaws.provider.TconsawsProvider.Initializer"></a>

```typescript
import { provider } from '@tcons/provider-tconsaws'

new provider.TconsawsProvider(scope: Construct, id: string, config?: TconsawsProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.Initializer.parameter.config">config</a></code> | <code>@tcons/provider-tconsaws.provider.TconsawsProviderConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@tcons/provider-tconsaws.provider.TconsawsProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@tcons/provider-tconsaws.provider.TconsawsProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@tcons/provider-tconsaws.provider.TconsawsProvider.Initializer.parameter.config"></a>

- *Type:* @tcons/provider-tconsaws.provider.TconsawsProviderConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetAssumeRoleWithWebIdentity">resetAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetRetryMode">resetRetryMode</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetSharedConfigFiles">resetSharedConfigFiles</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetSharedCredentialsFiles">resetSharedCredentialsFiles</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetSkipMetadataApiCheck">resetSkipMetadataApiCheck</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@tcons/provider-tconsaws.provider.TconsawsProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@tcons/provider-tconsaws.provider.TconsawsProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@tcons/provider-tconsaws.provider.TconsawsProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@tcons/provider-tconsaws.provider.TconsawsProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@tcons/provider-tconsaws.provider.TconsawsProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@tcons/provider-tconsaws.provider.TconsawsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@tcons/provider-tconsaws.provider.TconsawsProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@tcons/provider-tconsaws.provider.TconsawsProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@tcons/provider-tconsaws.provider.TconsawsProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccessKey` <a name="resetAccessKey" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetAlias` <a name="resetAlias" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAssumeRole` <a name="resetAssumeRole" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetAssumeRole"></a>

```typescript
public resetAssumeRole(): void
```

##### `resetAssumeRoleWithWebIdentity` <a name="resetAssumeRoleWithWebIdentity" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetAssumeRoleWithWebIdentity"></a>

```typescript
public resetAssumeRoleWithWebIdentity(): void
```

##### `resetEndpoints` <a name="resetEndpoints" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetEndpoints"></a>

```typescript
public resetEndpoints(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetProfile` <a name="resetProfile" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetRegion` <a name="resetRegion" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRetryMode` <a name="resetRetryMode" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetRetryMode"></a>

```typescript
public resetRetryMode(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetSharedConfigFiles` <a name="resetSharedConfigFiles" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetSharedConfigFiles"></a>

```typescript
public resetSharedConfigFiles(): void
```

##### `resetSharedCredentialsFiles` <a name="resetSharedCredentialsFiles" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetSharedCredentialsFiles"></a>

```typescript
public resetSharedCredentialsFiles(): void
```

##### `resetSkipMetadataApiCheck` <a name="resetSkipMetadataApiCheck" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetSkipMetadataApiCheck"></a>

```typescript
public resetSkipMetadataApiCheck(): void
```

##### `resetToken` <a name="resetToken" id="@tcons/provider-tconsaws.provider.TconsawsProvider.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TconsawsProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@tcons/provider-tconsaws.provider.TconsawsProvider.isConstruct"></a>

```typescript
import { provider } from '@tcons/provider-tconsaws'

provider.TconsawsProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@tcons/provider-tconsaws.provider.TconsawsProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@tcons/provider-tconsaws.provider.TconsawsProvider.isTerraformElement"></a>

```typescript
import { provider } from '@tcons/provider-tconsaws'

provider.TconsawsProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@tcons/provider-tconsaws.provider.TconsawsProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@tcons/provider-tconsaws.provider.TconsawsProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@tcons/provider-tconsaws'

provider.TconsawsProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@tcons/provider-tconsaws.provider.TconsawsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@tcons/provider-tconsaws.provider.TconsawsProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@tcons/provider-tconsaws'

provider.TconsawsProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TconsawsProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@tcons/provider-tconsaws.provider.TconsawsProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@tcons/provider-tconsaws.provider.TconsawsProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TconsawsProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@tcons/provider-tconsaws.provider.TconsawsProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TconsawsProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@tcons/provider-tconsaws.provider.TconsawsProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TconsawsProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.assumeRoleInput">assumeRoleInput</a></code> | <code>cdktf.IResolvable \| @tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.assumeRoleWithWebIdentityInput">assumeRoleWithWebIdentityInput</a></code> | <code>cdktf.IResolvable \| @tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.endpointsInput">endpointsInput</a></code> | <code>cdktf.IResolvable \| @tcons/provider-tconsaws.provider.TconsawsProviderEndpoints[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.retryModeInput">retryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.sharedConfigFilesInput">sharedConfigFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.sharedCredentialsFilesInput">sharedCredentialsFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.skipMetadataApiCheckInput">skipMetadataApiCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.assumeRole">assumeRole</a></code> | <code>cdktf.IResolvable \| @tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code>cdktf.IResolvable \| @tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.endpoints">endpoints</a></code> | <code>cdktf.IResolvable \| @tcons/provider-tconsaws.provider.TconsawsProviderEndpoints[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.retryMode">retryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.assumeRoleInput"></a>

```typescript
public readonly assumeRoleInput: IResolvable | TconsawsProviderAssumeRole[];
```

- *Type:* cdktf.IResolvable | @tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole[]

---

##### `assumeRoleWithWebIdentityInput`<sup>Optional</sup> <a name="assumeRoleWithWebIdentityInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.assumeRoleWithWebIdentityInput"></a>

```typescript
public readonly assumeRoleWithWebIdentityInput: IResolvable | TconsawsProviderAssumeRoleWithWebIdentity[];
```

- *Type:* cdktf.IResolvable | @tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity[]

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: IResolvable | TconsawsProviderEndpoints[];
```

- *Type:* cdktf.IResolvable | @tcons/provider-tconsaws.provider.TconsawsProviderEndpoints[]

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `retryModeInput`<sup>Optional</sup> <a name="retryModeInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.retryModeInput"></a>

```typescript
public readonly retryModeInput: string;
```

- *Type:* string

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `sharedConfigFilesInput`<sup>Optional</sup> <a name="sharedConfigFilesInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.sharedConfigFilesInput"></a>

```typescript
public readonly sharedConfigFilesInput: string[];
```

- *Type:* string[]

---

##### `sharedCredentialsFilesInput`<sup>Optional</sup> <a name="sharedCredentialsFilesInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.sharedCredentialsFilesInput"></a>

```typescript
public readonly sharedCredentialsFilesInput: string[];
```

- *Type:* string[]

---

##### `skipMetadataApiCheckInput`<sup>Optional</sup> <a name="skipMetadataApiCheckInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.skipMetadataApiCheckInput"></a>

```typescript
public readonly skipMetadataApiCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.assumeRole"></a>

```typescript
public readonly assumeRole: IResolvable | TconsawsProviderAssumeRole[];
```

- *Type:* cdktf.IResolvable | @tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole[]

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.assumeRoleWithWebIdentity"></a>

```typescript
public readonly assumeRoleWithWebIdentity: IResolvable | TconsawsProviderAssumeRoleWithWebIdentity[];
```

- *Type:* cdktf.IResolvable | @tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity[]

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | TconsawsProviderEndpoints[];
```

- *Type:* cdktf.IResolvable | @tcons/provider-tconsaws.provider.TconsawsProviderEndpoints[]

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `retryMode`<sup>Optional</sup> <a name="retryMode" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.retryMode"></a>

```typescript
public readonly retryMode: string;
```

- *Type:* string

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.sharedConfigFiles"></a>

```typescript
public readonly sharedConfigFiles: string[];
```

- *Type:* string[]

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.sharedCredentialsFiles"></a>

```typescript
public readonly sharedCredentialsFiles: string[];
```

- *Type:* string[]

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.skipMetadataApiCheck"></a>

```typescript
public readonly skipMetadataApiCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@tcons/provider-tconsaws.provider.TconsawsProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SignalConfig <a name="SignalConfig" id="@tcons/provider-tconsaws.signal.SignalConfig"></a>

#### Initializer <a name="Initializer" id="@tcons/provider-tconsaws.signal.SignalConfig.Initializer"></a>

```typescript
import { signal } from '@tcons/provider-tconsaws'

const signalConfig: signal.SignalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.expectedCount">expectedCount</a></code> | <code>number</code> | Number of success signals required before considering the resource complete. |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.queueUrl">queueUrl</a></code> | <code>string</code> | SQS queue URL or ARN where signals will be sent. |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.signalId">signalId</a></code> | <code>string</code> | Unique identifier for this deployment/signal group. Messages must have this as a message attribute to be counted. |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.publishTimeout">publishTimeout</a></code> | <code>string</code> | Timeout duration for each SQS SendMessage call (e.g., '10s', '1m'). |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.retries">retries</a></code> | <code>number</code> | Number of retries for transient SQS errors. |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.timeouts">timeouts</a></code> | <code>@tcons/provider-tconsaws.signal.SignalTimeouts</code> | timeouts block. |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalConfig.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | Map of arbitrary strings that, when changed, will force recreation of the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@tcons/provider-tconsaws.signal.SignalConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@tcons/provider-tconsaws.signal.SignalConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@tcons/provider-tconsaws.signal.SignalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@tcons/provider-tconsaws.signal.SignalConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@tcons/provider-tconsaws.signal.SignalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@tcons/provider-tconsaws.signal.SignalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@tcons/provider-tconsaws.signal.SignalConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expectedCount`<sup>Required</sup> <a name="expectedCount" id="@tcons/provider-tconsaws.signal.SignalConfig.property.expectedCount"></a>

```typescript
public readonly expectedCount: number;
```

- *Type:* number

Number of success signals required before considering the resource complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#expected_count Signal#expected_count}

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@tcons/provider-tconsaws.signal.SignalConfig.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

SQS queue URL or ARN where signals will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#queue_url Signal#queue_url}

---

##### `signalId`<sup>Required</sup> <a name="signalId" id="@tcons/provider-tconsaws.signal.SignalConfig.property.signalId"></a>

```typescript
public readonly signalId: string;
```

- *Type:* string

Unique identifier for this deployment/signal group. Messages must have this as a message attribute to be counted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#signal_id Signal#signal_id}

---

##### `publishTimeout`<sup>Optional</sup> <a name="publishTimeout" id="@tcons/provider-tconsaws.signal.SignalConfig.property.publishTimeout"></a>

```typescript
public readonly publishTimeout: string;
```

- *Type:* string

Timeout duration for each SQS SendMessage call (e.g., '10s', '1m').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#publish_timeout Signal#publish_timeout}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@tcons/provider-tconsaws.signal.SignalConfig.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

Number of retries for transient SQS errors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#retries Signal#retries}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@tcons/provider-tconsaws.signal.SignalConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SignalTimeouts;
```

- *Type:* @tcons/provider-tconsaws.signal.SignalTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#timeouts Signal#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@tcons/provider-tconsaws.signal.SignalConfig.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of arbitrary strings that, when changed, will force recreation of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#triggers Signal#triggers}

---

### SignalTimeouts <a name="SignalTimeouts" id="@tcons/provider-tconsaws.signal.SignalTimeouts"></a>

#### Initializer <a name="Initializer" id="@tcons/provider-tconsaws.signal.SignalTimeouts.Initializer"></a>

```typescript
import { signal } from '@tcons/provider-tconsaws'

const signalTimeouts: signal.SignalTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@tcons/provider-tconsaws.signal.SignalTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#create Signal#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@tcons/provider-tconsaws.signal.SignalTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#delete Signal#delete}

---

### TconsawsProviderAssumeRole <a name="TconsawsProviderAssumeRole" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.Initializer"></a>

```typescript
import { provider } from '@tcons/provider-tconsaws'

const tconsawsProviderAssumeRole: provider.TconsawsProviderAssumeRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.duration">duration</a></code> | <code>string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.externalId">externalId</a></code> | <code>string</code> | A unique identifier that might be required when you assume a role in another account. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.policy">policy</a></code> | <code>string</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.policyArns">policyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.roleArn">roleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.sessionName">sessionName</a></code> | <code>string</code> | An identifier for the assumed role session. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.sourceIdentity">sourceIdentity</a></code> | <code>string</code> | Source identity specified by the principal assuming the role. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Assume role session tags. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.transitiveTagKeys">transitiveTagKeys</a></code> | <code>string[]</code> | Assume role session tag keys to pass to any subsequent sessions. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#duration TconsawsProvider#duration}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

A unique identifier that might be required when you assume a role in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#external_id TconsawsProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#policy TconsawsProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#policy_arns TconsawsProvider#policy_arns}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#role_arn TconsawsProvider#role_arn}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.sessionName"></a>

```typescript
public readonly sessionName: string;
```

- *Type:* string

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#session_name TconsawsProvider#session_name}

---

##### `sourceIdentity`<sup>Optional</sup> <a name="sourceIdentity" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.sourceIdentity"></a>

```typescript
public readonly sourceIdentity: string;
```

- *Type:* string

Source identity specified by the principal assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#source_identity TconsawsProvider#source_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#tags TconsawsProvider#tags}

---

##### `transitiveTagKeys`<sup>Optional</sup> <a name="transitiveTagKeys" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole.property.transitiveTagKeys"></a>

```typescript
public readonly transitiveTagKeys: string[];
```

- *Type:* string[]

Assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#transitive_tag_keys TconsawsProvider#transitive_tag_keys}

---

### TconsawsProviderAssumeRoleWithWebIdentity <a name="TconsawsProviderAssumeRoleWithWebIdentity" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.Initializer"></a>

```typescript
import { provider } from '@tcons/provider-tconsaws'

const tconsawsProviderAssumeRoleWithWebIdentity: provider.TconsawsProviderAssumeRoleWithWebIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.duration">duration</a></code> | <code>string</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.policy">policy</a></code> | <code>string</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.policyArns">policyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.roleArn">roleArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.sessionName">sessionName</a></code> | <code>string</code> | An identifier for the assumed role session. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.webIdentityToken">webIdentityToken</a></code> | <code>string</code> | Value of a web identity token from an OpenID Connect (OIDC) or OAuth provider. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">webIdentityTokenFile</a></code> | <code>string</code> | File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#duration TconsawsProvider#duration}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#policy TconsawsProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#policy_arns TconsawsProvider#policy_arns}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#role_arn TconsawsProvider#role_arn}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```typescript
public readonly sessionName: string;
```

- *Type:* string

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#session_name TconsawsProvider#session_name}

---

##### `webIdentityToken`<sup>Optional</sup> <a name="webIdentityToken" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```typescript
public readonly webIdentityToken: string;
```

- *Type:* string

Value of a web identity token from an OpenID Connect (OIDC) or OAuth provider.

One of `web_identity_token` or `web_identity_token_file` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#web_identity_token TconsawsProvider#web_identity_token}

---

##### `webIdentityTokenFile`<sup>Optional</sup> <a name="webIdentityTokenFile" id="@tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```typescript
public readonly webIdentityTokenFile: string;
```

- *Type:* string

File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider.

One of `web_identity_token` or `web_identity_token_file` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#web_identity_token_file TconsawsProvider#web_identity_token_file}

---

### TconsawsProviderConfig <a name="TconsawsProviderConfig" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.Initializer"></a>

```typescript
import { provider } from '@tcons/provider-tconsaws'

const tconsawsProviderConfig: provider.TconsawsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.accessKey">accessKey</a></code> | <code>string</code> | AWS access key ID. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.assumeRole">assumeRole</a></code> | <code>cdktf.IResolvable \| @tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole[]</code> | assume_role block. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code>cdktf.IResolvable \| @tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity[]</code> | assume_role_with_web_identity block. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.endpoints">endpoints</a></code> | <code>cdktf.IResolvable \| @tcons/provider-tconsaws.provider.TconsawsProviderEndpoints[]</code> | endpoints block. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | Maximum number of retries for AWS API calls. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.profile">profile</a></code> | <code>string</code> | AWS shared configuration profile name. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.region">region</a></code> | <code>string</code> | Default AWS region for resources. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.retryMode">retryMode</a></code> | <code>string</code> | AWS retry mode (legacy, standard, adaptive). |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.secretKey">secretKey</a></code> | <code>string</code> | AWS secret access key. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>string[]</code> | List of paths to AWS shared configuration files. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>string[]</code> | List of paths to AWS shared credentials files. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip EC2 instance metadata service reachability check. |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.token">token</a></code> | <code>string</code> | AWS session token. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

AWS access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#access_key TconsawsProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#alias TconsawsProvider#alias}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.assumeRole"></a>

```typescript
public readonly assumeRole: IResolvable | TconsawsProviderAssumeRole[];
```

- *Type:* cdktf.IResolvable | @tcons/provider-tconsaws.provider.TconsawsProviderAssumeRole[]

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#assume_role TconsawsProvider#assume_role}

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.assumeRoleWithWebIdentity"></a>

```typescript
public readonly assumeRoleWithWebIdentity: IResolvable | TconsawsProviderAssumeRoleWithWebIdentity[];
```

- *Type:* cdktf.IResolvable | @tcons/provider-tconsaws.provider.TconsawsProviderAssumeRoleWithWebIdentity[]

assume_role_with_web_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#assume_role_with_web_identity TconsawsProvider#assume_role_with_web_identity}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | TconsawsProviderEndpoints[];
```

- *Type:* cdktf.IResolvable | @tcons/provider-tconsaws.provider.TconsawsProviderEndpoints[]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#endpoints TconsawsProvider#endpoints}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Maximum number of retries for AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#max_retries TconsawsProvider#max_retries}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

AWS shared configuration profile name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#profile TconsawsProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Default AWS region for resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#region TconsawsProvider#region}

---

##### `retryMode`<sup>Optional</sup> <a name="retryMode" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.retryMode"></a>

```typescript
public readonly retryMode: string;
```

- *Type:* string

AWS retry mode (legacy, standard, adaptive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#retry_mode TconsawsProvider#retry_mode}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

AWS secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#secret_key TconsawsProvider#secret_key}

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.sharedConfigFiles"></a>

```typescript
public readonly sharedConfigFiles: string[];
```

- *Type:* string[]

List of paths to AWS shared configuration files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#shared_config_files TconsawsProvider#shared_config_files}

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.sharedCredentialsFiles"></a>

```typescript
public readonly sharedCredentialsFiles: string[];
```

- *Type:* string[]

List of paths to AWS shared credentials files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#shared_credentials_files TconsawsProvider#shared_credentials_files}

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.skipMetadataApiCheck"></a>

```typescript
public readonly skipMetadataApiCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip EC2 instance metadata service reachability check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#skip_metadata_api_check TconsawsProvider#skip_metadata_api_check}

---

##### `token`<sup>Optional</sup> <a name="token" id="@tcons/provider-tconsaws.provider.TconsawsProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

AWS session token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#token TconsawsProvider#token}

---

### TconsawsProviderEndpoints <a name="TconsawsProviderEndpoints" id="@tcons/provider-tconsaws.provider.TconsawsProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@tcons/provider-tconsaws.provider.TconsawsProviderEndpoints.Initializer"></a>

```typescript
import { provider } from '@tcons/provider-tconsaws'

const tconsawsProviderEndpoints: provider.TconsawsProviderEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.provider.TconsawsProviderEndpoints.property.sqs">sqs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@tcons/provider-tconsaws.provider.TconsawsProviderEndpoints.property.sqs"></a>

```typescript
public readonly sqs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs#sqs TconsawsProvider#sqs}

---

## Classes <a name="Classes" id="Classes"></a>

### SignalTimeoutsOutputReference <a name="SignalTimeoutsOutputReference" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.Initializer"></a>

```typescript
import { signal } from '@tcons/provider-tconsaws'

new signal.SignalTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>@tcons/provider-tconsaws.signal.SignalTimeouts \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@tcons/provider-tconsaws.signal.SignalTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignalTimeouts | IResolvable;
```

- *Type:* @tcons/provider-tconsaws.signal.SignalTimeouts | cdktf.IResolvable

---



