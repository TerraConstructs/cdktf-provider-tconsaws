// https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of success signals required before considering the resource complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#expected_count Signal#expected_count}
  */
  readonly expectedCount: number;
  /**
  * Timeout duration for each SQS SendMessage call (e.g., '10s', '1m')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#publish_timeout Signal#publish_timeout}
  */
  readonly publishTimeout?: string;
  /**
  * SQS queue URL or ARN where signals will be sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#queue_url Signal#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Number of retries for transient SQS errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#retries Signal#retries}
  */
  readonly retries?: number;
  /**
  * Unique identifier for this deployment/signal group. Messages must have this as a message attribute to be counted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#signal_id Signal#signal_id}
  */
  readonly signalId: string;
  /**
  * Map of arbitrary strings that, when changed, will force recreation of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#triggers Signal#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#timeouts Signal#timeouts}
  */
  readonly timeouts?: SignalTimeouts;
}
export interface SignalTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#create Signal#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#delete Signal#delete}
  */
  readonly delete?: string;
}

export function signalTimeoutsToTerraform(struct?: SignalTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function signalTimeoutsToHclTerraform(struct?: SignalTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SignalTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SignalTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SignalTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal tconsaws_signal}
*/
export class Signal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tconsaws_signal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Signal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Signal to import
  * @param importFromId The id of the existing Signal that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Signal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tconsaws_signal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraconstructs/tconsaws/1.0.0/docs/resources/signal tconsaws_signal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignalConfig
  */
  public constructor(scope: Construct, id: string, config: SignalConfig) {
    super(scope, id, {
      terraformResourceType: 'tconsaws_signal',
      terraformGeneratorMetadata: {
        providerName: 'tconsaws',
        providerVersion: '1.0.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expectedCount = config.expectedCount;
    this._publishTimeout = config.publishTimeout;
    this._queueUrl = config.queueUrl;
    this._retries = config.retries;
    this._signalId = config.signalId;
    this._triggers = config.triggers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expected_count - computed: false, optional: false, required: true
  private _expectedCount?: number; 
  public get expectedCount() {
    return this.getNumberAttribute('expected_count');
  }
  public set expectedCount(value: number) {
    this._expectedCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedCountInput() {
    return this._expectedCount;
  }

  // failure_received - computed: true, optional: false, required: false
  public get failureReceived() {
    return this.getBooleanAttribute('failure_received');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_ids - computed: true, optional: false, required: false
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }

  // publish_timeout - computed: true, optional: true, required: false
  private _publishTimeout?: string; 
  public get publishTimeout() {
    return this.getStringAttribute('publish_timeout');
  }
  public set publishTimeout(value: string) {
    this._publishTimeout = value;
  }
  public resetPublishTimeout() {
    this._publishTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishTimeoutInput() {
    return this._publishTimeout;
  }

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // signal_id - computed: false, optional: false, required: true
  private _signalId?: string; 
  public get signalId() {
    return this.getStringAttribute('signal_id');
  }
  public set signalId(value: string) {
    this._signalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalIdInput() {
    return this._signalId;
  }

  // success_count - computed: true, optional: false, required: false
  public get successCount() {
    return this.getNumberAttribute('success_count');
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SignalTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SignalTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expected_count: cdktf.numberToTerraform(this._expectedCount),
      publish_timeout: cdktf.stringToTerraform(this._publishTimeout),
      queue_url: cdktf.stringToTerraform(this._queueUrl),
      retries: cdktf.numberToTerraform(this._retries),
      signal_id: cdktf.stringToTerraform(this._signalId),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      timeouts: signalTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expected_count: {
        value: cdktf.numberToHclTerraform(this._expectedCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publish_timeout: {
        value: cdktf.stringToHclTerraform(this._publishTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_url: {
        value: cdktf.stringToHclTerraform(this._queueUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signal_id: {
        value: cdktf.stringToHclTerraform(this._signalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: signalTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SignalTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
